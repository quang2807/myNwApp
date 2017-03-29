var fs = require('fs');
var myApp = {};
myApp = angular.module('myApp', ['ngRoute']);

myApp.factory('$apply', ['$rootScope', function ($rootScope) {
	return function (fn) {
		setTimeout(function () {
			$rootScope.$apply(fn);
		});
	};
}]);

myApp.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|ftp|file|blob|chrome-extension):|data:image\/)/);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);


var exec = require('child_process').exec;
var cmd = 'mkdir F:\\test';

exec(cmd, function(error, stdout, stderr) {
  console.log(error);
});