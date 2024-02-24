const fs = require('fs');

var jsondata = {};
var errorinfo = {};
fs.readFile('./src/namelist.csv', (err, data) => {
    if (err) {
        console.log('[checkValidInfo.js] namelist.csv file no exists. you can create it manually.');
        throw err;
    }

    let rawdata = data.toString().split('\r\n');
    rawdata.forEach(item => jsondata[item.split(',')[0]]=item.split(',')[1]);
    console.log("[checkValidInfo.js] namelist is ready.");
})

const isValidPersonalInfo = function(personalinfo) {
    let name = personalinfo.name;
    let num = personalinfo.number;
    let number = num.toString();
    if (!number in jsondata) { 
        errorinfo = personalinfo;
        return false; 
    }
    if (jsondata[number] !== name) { 
        errorinfo = personalinfo;
        return false; 
    }
    return true;
}

const isValidTeamInfo = function(teaminfo) {
    console.log(teaminfo);
    for (member of teaminfo) {
        if (!isValidPersonalInfo(member)) {
            console.log("[checkValidInfo.js] check valid team info error:");
            console.log(errorinfo);
            return false;
        }
    }
    return true;
}

const isValidInfo = function(info) {
    console.log(info)
    if (info.tasktype === 'personal' && isValidPersonalInfo(info.personalinfo)) {
        return true;
    }
    else if (info.tasktype === 'teamwork' && isValidTeamInfo(info.teaminfo)) {
        return true;
    } 
    return false;
}

const getErrorInfo = function() {
    return errorinfo;
}

exports.isValidInfo = isValidInfo;
exports.getErrorInfo = getErrorInfo;