var express = require('express');
var multiparty = require('multiparty');
var {getErrorInfo, isValidInfo} = require('./utils/checkValidInfo');
var {makeUploadDir} = require('./utils/makeUploadDir');
var fs = require('fs');

var router = express.Router();

router.post('/*', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(400).send('Error uploading files');
            return;
        }
        
        // add new info
        let info = JSON.parse(fields.submit_info);
        let now = new Date();
        Object.assign(info, {
            ip: req.ip,
            submit_date: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`,
            submit_time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        });

        // ckeck valid info
        let checkResult = isValidInfo(info); 
        console.log('========= [info] ==========');
        console.log("[infocheck] result:"+checkResult);
        if (!checkResult) {
            console.log("[infocheck] invalid info on:"+JSON.stringify(getErrorInfo()));
            let errmessage = "invalid info on:"+JSON.stringify(getErrorInfo());
            res.status(400).send(errmessage); // 前端需要处理这个
            return;
        }

        const uploadedFiles = files.file.map(file => {
            const fileName = file.originalFilename;
            const tempPath = file.path;
            console.log("[upload.js] receive from remote to target path...");
            makeUploadDir('./uploads/', info)
            .then((targetdir) => {
                const targetPath = targetdir + fileName;
                console.log(fileName, " ");
                fs.renameSync(tempPath, targetPath); 
                return fileName;
            });
        });

        res.status(200).send('Files uploaded successfully: ' + uploadedFiles.join(', '));
    });
});

module.exports = router;