const fs = require('fs')
const AdmZip = require('adm-zip');
const AWS = require('aws-sdk');
const docFileName = process.env.BUCKET_NAME || "SimonStaszkiewiczResume.docx";
const htmlFileName = process.env.BUCKET_NAME || "SimonStaszkiewiczResume.html";
const zipName = process.env.ZIP_NAME || "SimonStaszkiewiczResume.zip";
const region = process.env.BUCKET_REGION || 'us-west-2';
const bucket = process.env.BUCKET_NAME || 'simon-staszkiewicz-public';
const s3 = new AWS.S3({region});

async function push() {
    let zip = new AdmZip();
    zip.addLocalFile(docFileName);
    zip.addLocalFile(htmlFileName);
    zip.toBuffer(async zipBuffer => {
        const baseParams = {
            Bucket: bucket,
            ACL: 'public-read',
        }
        await Promise.all([
            s3.putObject({
                ...baseParams,
                Key: zipName,
                Body: zipBuffer
            }).promise(),

            s3.putObject({
                ...baseParams,
                Key: docFileName,
                Body: fs.readFileSync(docFileName)
            }).promise(),
            
            s3.putObject({
                ...baseParams,
                Key: htmlFileName,
                Body: fs.readFileSync(htmlFileName)
            }).promise(),
        ]);
    });
}

push()