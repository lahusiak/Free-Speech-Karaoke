myApp.controller('contact', ['$scope', '$http', function($scope, $http) {
    //$scope.mailingList = [];
    //$scope.master = {firstName: "John", lastName: "Doe", email: "person@email.com", comment: "Comment"};
    $scope.user = {};
    //$scope.reset = function() {
    //    //$scope.user = angular.copy($scope.master);
    //};
       //POST
        $scope.clickButton = function(kittyFooFoo){
           console.log("I'm clicked!", kittyFooFoo);

            //$http.post('/data', ).then(function(response){
            //
            //    $scope.getPeople();
            //
            //   console.log('This is mailingList', $scope.mailingList);
           //});
    };
    //GET
    //$scope.getPeople = function(){
    //    $http.get('/data').then(function(response){
    //        $scope.mailingList = response.data;
    //    });
    //};
    //$scope.reset();
}]);
