questApp.controller('CommentController',
    function CommentController($scope, $http){
     
        $http({method: 'GET', url: 'comment.json'}).
         success(function(data, status, headers, config) {
            $scope.comments=data;
        }).

        error(function(data, status, headers, config) {
            console.log(status);
        });
        
    }
);