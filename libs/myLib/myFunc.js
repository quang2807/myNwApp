RED.ngApp.factory('$myFunc', function ($apply, $sce) {
    var exports = {};
    exports.html = function (str) {
        str = str.replace(/\n/g, '<br>');
        return $sce.trustAsHtml(str);
    };

    exports.showData = function (data) {
        if (data)
            data = data.replace(/\n/g, '<br>');
        return data ? $sce.trustAsHtml(data) : $sce.trustAsHtml('--');
    };

    exports.checkInt = function (data, min, max) {
        var number = parseInt(data);
        var minNumber = (min)? parseInt(min): null;
        var maxNumber = (max)? parseInt(max): null;
        var result = true;
        if(number < minNumber) result = false;
        if(number > maxNumber) result = false;
        return result;
    };
    
    exports.showUserAvatar = function(path){
        var url = '';
        if(!path)
        {
            url = CONFIG.themeUrl + '/img/1.png';
        }
        else
        {
            url = CONFIG.siteUrl + path;
        }
        return url;
    };
    
    exports.isEmptyString = function(str){
        var value = str || '';
        value = String(value);
        return (value.length > 0)? false: true;
    };
    
    exports.hasData = function(value){
        if(typeof value == 'string'){
            return (!exports.isEmptyString(value))? true: false;
        }
        else if(typeof value == 'array'){
            return (value.length > 0)? true: false;
        }
        else if(typeof value == 'object'){
            var array = Object.keys(value);
            return (array.length > 0)? true: false;
        }
        
        return false;
    }
    
    return exports;
});