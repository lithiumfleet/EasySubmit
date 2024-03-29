const  getPersonalFileWarpDirName = function(personalinfo) {
    return "" + personalinfo.number + "-" + personalinfo.name;

}
const  getTeamFileWarpDirName = function(teaminfo) {
    let res = [];
    teaminfo.forEach((item) => {
        res.push(getPersonalFileWarpDirName(item));
    });
    let uniqueres = [...new Set(res)]; 
    uniqueres.sort();
    return uniqueres.join("_");
}

exports.getPersonalFileWarpDirName = getPersonalFileWarpDirName;
exports.getTeamFileWarpDirName = getTeamFileWarpDirName;