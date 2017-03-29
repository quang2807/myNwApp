myApp.controller('listCtrl', function ($scope, $apply, $rootScope, $rootScope, $myFS) {

    $scope.listDataFilePath = 'jsonData/list.json';
    $scope.data = {
        getList: function () {
            $myFS.readFile($scope.listDataFilePath, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log(data);
                $apply(function () {
                    $rootScope.list = JSON.parse(data);
                });
            });
        }
    };

    $scope.data.getList();
});