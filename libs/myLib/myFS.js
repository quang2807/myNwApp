myApp.factory('$myFS', function ($apply) {
    var exports = {};
    
    exports.readFile = function (path, callBack) {
        path = path || '';
        callBack = callBack || function(){};
        fs.readFile(path, function(err, data){
            data = data.toString();
            callBack(err, data);
        });
    };
    
    return exports;
});