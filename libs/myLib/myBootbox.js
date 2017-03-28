bootbox.defineLocale('vn', {
    OK: "Đồng ý",
    CANCEL: "Hủy bỏ",
    CONFIRM: "Xác nhận"
});
bootbox.setDefaults({locale: 'vn'});
RED.ngApp.factory('$myBootbox', function ($apply, $sce) {
    var exports = function () {
        this.confirm = function (message, callBack) {
            return bootbox.confirm(message, callBack || function () {
            });
        };
        this.alert = function (message, callBack) {
            return bootbox.confirm(message, callBack || function () {
            });
        };
        this.prompt = function (message, callBack) {
            return bootbox.confirm(message, callBack || function () {
            });
        }

        return this;
    };

    return exports;
});