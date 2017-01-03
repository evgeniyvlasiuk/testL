questApp.controller('UserController',
    function UserController($scope, $http){
     
        $http({method: 'GET', url: 'user.json'}).
         success(function(data, status, headers, config) {
            $scope.users=data;
        }).

        error(function(data, status, headers, config) {
            console.log(status);
        });
        
    }
);