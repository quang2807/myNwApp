myApp.controller('singleCtrl', function ($scope, $apply, $rootScope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.listSex = {
        male: 'Nam',
        female: 'Nữ',
    };

    $scope.name;
    $scope.age;
    $scope.sex;

    $scope.data = {
        get: function () {
            var data = $rootScope.list[$scope.id] || {
                name: '',
                age: '',
                sex: 'male'
            };
            console.log($rootScope.list);
            console.log(data);
            $apply(function () {
                $scope.name = data.name;
                $scope.age = data.age;
                $scope.sex = data.sex;
            });
        }
    };

    $scope.action = {
        update: function () {
            var data = {
                name: $scope.name,
                age: $scope.age,
                sex: $scope.sex
            };
            $apply(function () {
                if (parseInt($scope.id) > 0)
                {
                    $rootScope.list[$scope.id] = data;
                } else
                {
                    $rootScope.list.push(data);
                }
            });
        }
    };

    $scope.data.get();
})