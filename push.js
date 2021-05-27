const fs = require('fs')
const AdmZip = require('adm-zip');
const AWS = require('aws-sdk');
const docFileName = process.env.BUCKET_NAME || "SimonStaszkiewiczResume.docx";
const htmlFileName = process.env.BUCKET_NAME || "SimonStaszkiewiczResume.html";
const zipName = process.env.ZIP_NAME || "SimonStaszkiewiczResume.zip";
const region = process.env.BUCKET_REGION || 'us-west-2';
const bucket = process.env.BUCKET_NAME || 'simon-staszkiewicz-public';
const gitCommit = process.env.GIT_COMMIT;
const s3 = new AWS.S3({region});

async function push() {
    let zip = new AdmZip();
    zip.addLocalFile(docFileName);
    zip.addLocalFile(htmlFileName);
    zip.toBuffer(async zipBuffer => {
        let promises = [
            pushToS3(zipName, zipBuffer),
            pushToS3(docFileName, fs.readFileSync(docFileName)),
            pushToS3(htmlFileName, fs.readFileSync(htmlFileName)),
        ]

        if (gitCommit) {
            promises = [
                ...promises,
                pushToS3(`${gitCommit}/${zipName}`, zipBuffer),
                pushToS3(`${gitCommit}/${docFileName}`, fs.readFileSync(docFileName)),
                pushToS3(`${gitCommit}/${htmlFileName}`, fs.readFileSync(htmlFileName)),
            ]
        }

        await Promise.all(promises)
        .then(result => {
            console.log('Successfully pushed all documents to S3.')
        })
        .catch(e => {
            console.error(e)
            process.exit(1)
        });
    });
}

function pushToS3(key, body) {
    return s3.putObject({
        Bucket: bucket,
        ACL: 'public-read',
        Key: key,
        Body: body,
    }).promise()
}

push()