RED.ngApp.directive('myMenu', function ($apply) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            scope.isActiveMenu = function(key){
                return (key == scope.active)? true: false;
            };
            
            scope.checkCount = function(count){
                var value = parseInt(count) || '';
                return (value != '')? true: false;
            };
            
            scope.showTarget = function(target)
            {
                target = target || '';
                return target;
            }
            
            scope.$watch('menus', function(newVal,oldVal){
                $apply(function(){
                    scope.menus = newVal;
                });
            });
        },
        scope:{
            menus: '=',
            active: '=',
        },
        templateUrl: CONFIG.siteUrl + '/components/copMyMenus'
    };
});