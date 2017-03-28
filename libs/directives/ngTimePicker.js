RED.ngApp.directive('timePicker', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            $(element).timepicker({
                minuteStep: 1,
                showMeridian: false,
                showInputs: false,
                disableFocus: false
            });
        }
    };
});