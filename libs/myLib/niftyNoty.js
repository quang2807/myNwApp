RED.ngApp.factory('$niftyNoty', function ($apply, $sce) {
    var exports = {};
    exports.type = {
        success: 'success',
        primary: 'primary',
        info: 'info',
        warning: 'warning',
        danger: 'danger',
        mint: 'mint',
        purple: 'purple',
        pink: 'pink',
        dark: 'dark'
    }
    exports.init = function (message, type, timeOut) {
        this.message = message || '';
        this.type = type || exports.type.primary;
        this.timeOut = timeOut || 3000;
        this.icon = 'fa fa-bell';
        switch(this.type){
            case exports.type.success:
                this.icon = 'fa fa-check';
                break;
            case exports.type.danger:
                this.icon = 'fa fa-close';
                break;
        }
        
        this.setIcon = function(icon){
            this.icon = icon;
            return this;
        }
        this.show = function () {
            $.niftyNoty({
                type: this.type,
                icon: this.icon,
                message: this.message,
                container: 'floating',
                timer: this.timeOut
            });
        };
        return this;
    };

    return exports;
});