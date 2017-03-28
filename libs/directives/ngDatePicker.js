RED.ngApp.directive('datePicker', function ()
{
    return {
        restrict: 'C',
        link: function (scope, element, attrs)
        {
            $(element).datepicker({
                autoclose: false,
                calendarWeeks: false,
                clearBtn: false,
                daysOfWeekDisabled: [],
                endDate: Infinity,
                forceParse: true,
                format: 'dd/mm/yyyy',
                keyboardNavigation: true,
                language: 'vi',
                minViewMode: 0,
                multidate: false,
                multidateSeparator: ',',
                orientation: "auto",
                rtl: false,
                startDate: -Infinity,
                startView: 0,
                todayBtn: true,
                todayHighlight: false,
                weekStart: 0
            });
        }
    };
});