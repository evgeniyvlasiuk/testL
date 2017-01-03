questApp.controller('ProductController',
    function ProductController($scope, $http){
     
        $http({method: 'GET', url: 'products.json'}).
         success(function(data, status, headers, config) {
            $scope.products=data;
            $scope.i=0;
        $scope.pr = function  (){$scope.i=0;};
        $scope.pr1 = function (){$scope.i=1;};
        $scope.pr2 = function (){$scope.i=2;};
        $scope.pr3 = function (){$scope.i=3;};
        $scope.pr4 = function (){$scope.i=4;};
        $scope.pr5 = function (){$scope.i=5;};
        $scope.pr6 = function (){$scope.i=6;};
        $scope.pr7 = function (){$scope.i=7;};
        }).

        error(function(data, status, headers, config) {
            console.log(status);
        }); 
         $scope.pr = function (){
         i=1;
         console.log(i);
    };
}
);

