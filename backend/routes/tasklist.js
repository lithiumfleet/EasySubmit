var express = require('express');
const fs = require('fs');

var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("get tasklist...");
    fs.readFile('./src/taskList.json',(err, data)=>{
        if (err) {
            console.log("file no exists.");
            throw err;
        } else {
            res.send(data);
        }
    })
});

router.get('/finished', function(req, res, next) {
    console.log("get finished tasklist...");
    fs.readFile('./src/finishedTaskList.json',(err, data)=>{
        if (err) {
            console.log("file no exists.");
            throw err;
        } else {
            res.send(data);
        }
    })
});

module.exports = router;