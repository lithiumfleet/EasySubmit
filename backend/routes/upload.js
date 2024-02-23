var express = require('express');
var multiparty = require('multiparty');
var fs = require('fs');

var router = express.Router();

router.post('/*', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(400).send('Error uploading files');
            return;
        }
        console.log(fields);

        const uploadedFiles = files.file.map(file => {
            const fileName = file.originalFilename;
            const tempPath = file.path;
            const targetPath = './uploads/' + fileName;

            fs.renameSync(tempPath, targetPath); // 使用renameSync确保同步移动文件
            return fileName;
        });

        res.status(200).send('Files uploaded successfully: ' + uploadedFiles.join(', '));
    });
});

module.exports = router;