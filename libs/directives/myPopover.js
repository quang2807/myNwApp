RED.ngApp.directive('myPopover', function ($apply) {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            $apply(function(){
                $(element).popover({
                    trigger: 'hover',
                    content: attrs.content || '',
                    tittle: attrs.title || ''
                });    
            });
        }
    };
});