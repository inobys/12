let common = {};
// 获取URL中指定参数 | 本接口即将废弃，如果需要url请使用  appSettings.getQueryString()
common.getQueryString = (queryName) => {
    var query = decodeURI(window.location.search.substring(0));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
    return null;
}

export { common }




