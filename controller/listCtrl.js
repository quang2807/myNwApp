myApp.controller('listCtrl', function ($scope, $apply, $rootScope, $rootScope){
    
    $rootScope.list = [
        {name: "Quang", age: "27", sex: 'male'},
        {name: "Ngoc", age: "32", sex: 'female'},
        {name: "Thinh", age: "64", sex: 'male'},
    ];
    
});