myApp.config(function ($routeProvider, $locationProvider)
{
    $routeProvider
            .when('/', {
                templateUrl: 'views/list.html',
                controller: 'listCtrl'
            })
            .when('/list/treated', {
                templateUrl: 'views/single.html',
                controller: 'singleCtrl'
            })
            .otherwise({redirectTo: '/'});
    // configure html5 to get links working on jsfiddle
//  $locationProvider.html5Mode(true);
});
