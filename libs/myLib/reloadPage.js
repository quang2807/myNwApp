RED.ngApp.factory('$reloadPage', function ($apply, $sce) {
    var exports = {};
    exports.id = '#reloadPage';
    exports.show = function(){
        $(exports.id).show();
    };
    exports.hide = function(){
        $(exports.id).hide();
    };
    return exports;
});