var myApp = {};
myApp = angular.module('myApp', ['ngRoute']);
myApp.factory('$apply', ['$rootScope', function ($rootScope) {
	return function (fn) {
		setTimeout(function () {
			$rootScope.$apply(fn);
		});
	};
}]);
