RED.ngApp.directive('myTopMenu', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            scope.isActiveMenu = function(key){
                return (key == scope.active)? true: false;
            };
            
            scope.action = {
                click: function(key){
                    scope.menus[key].click();
                }
            }
        },
        scope:{
            menus: '=',
            active: '=',
        },
        templateUrl: CONFIG.siteUrl + '/components/copMyTopMenus'
    };
});