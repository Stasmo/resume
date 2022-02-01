const fs     = require('fs');
const AdmZip = require('adm-zip');
const AWS    = require('aws-sdk');

const docFileName  = process.env.DOC_NAME  || "SimonStaszkiewiczResume.docx";
const htmlFileName = process.env.HTML_NAME || "SimonStaszkiewiczResume.html";
const zipName      = process.env.ZIP_NAME  || "SimonStaszkiewiczResume.zip";

const region       = process.env.BUCKET_REGION || "us-west-2";
const bucket       = process.env.BUCKET_NAME   || "simon-staszkiewicz-public";
const gitCommit    = process.env.GIT_COMMIT;

const s3 = new AWS.S3({region});

async function push() {
  const zip = new AdmZip();
  zip.addLocalFile(docFileName);
  zip.addLocalFile(htmlFileName);
  zip.toBuffer(async zipBuffer => {
    try {

      const pushAll = (zipLocation, docLocation, htmlLocation) => {
        return [
          pushToS3(zipLocation, zipBuffer),
          pushToS3(docLocation, fs.readFileSync(docFileName)),
          pushToS3(htmlLocation, fs.readFileSync(htmlFileName)),
        ]
      };

      const promises = [
        ...pushAll(zipName, docFileName, htmlFileName),
        ...pushAll(
          `resume/latest/${zipName}`,
          `resume/latest/${docFileName}`,
          `resume/latest/${htmlFileName}`
        ),
      ];

      if (gitCommit) {
        promises.push(
          ...pushAll(
            `resume/${gitCommit}/${zipName}`,
            `resume/${gitCommit}/${docFileName}`,
            `resume/${gitCommit}/${htmlFileName}`
          ),
        )
      }

      await Promise.all(promises);
      console.log('Successfully pushed all documents to S3.');
    } catch(e) {
      console.error(e);
      process.exit(1);
    }
  });
}

function pushToS3(key, body) {
  return s3.putObject({
    Bucket: bucket,
    ACL: 'public-read',
    Key: key,
    Body: body,
  }).promise();
}

push();