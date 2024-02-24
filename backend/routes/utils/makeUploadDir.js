var fs = require("fs");
var {getPersonalFileWarpDirName, getTeamFileWarpDirName} = require('./getFileWarpDirName');

const makeDir = async function(dirname) {
    try {
        await fs.promises.access(dirname);
    } catch (error) {
        await fs.promises.mkdir(dirname, { recursive: true });
    }
    return dirname + '/';
}

const makeUploadDir = async function(base, info) { 
    let project = info.project;
    let taskname = info.taskname;
    let fileWarpDir = info.tasktype==='personal' ? 
        getPersonalFileWarpDirName(info.personalinfo) :
        getTeamFileWarpDirName(info.teaminfo);
    if (base.slice(-1) !== '/') {
        base += '/';
    }

    const projectDir = await makeDir(base + project);
    const taskDir = await makeDir(projectDir + taskname);
    const targetDir = await makeDir(taskDir + fileWarpDir);
    console.log("[makeUploadDir.js] target dir: "+targetDir);
    return targetDir;
}


exports.makeUploadDir = makeUploadDir;