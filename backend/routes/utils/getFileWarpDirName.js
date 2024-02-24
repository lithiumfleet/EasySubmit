const  getPersonalFileWarpDirName = function(personalinfo) {
    return "" + personalinfo.number + "-" + personalinfo.name;

}
const  getTeamFileWarpDirName = function(teaminfo) {
    let res = "";
    teaminfo.forEach((item) => {
        res += getPersonalFileWarpDirName(item) + "_";
    })
    return res.slice(0,-1);
}

exports.getPersonalFileWarpDirName = getPersonalFileWarpDirName;
exports.getTeamFileWarpDirName = getTeamFileWarpDirName;