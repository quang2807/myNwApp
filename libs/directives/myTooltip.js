RED.ngApp.directive('addTooltip', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            $(element).tooltip();
        }
    };
});