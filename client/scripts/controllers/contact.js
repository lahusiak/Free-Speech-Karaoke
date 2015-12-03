myApp.controller('contact', ['$scope', '$http', function($scope, $http) {

    $scope.mailinglists = [];
    $scope.mailinglist = {};

    //var fan = {fan_id: 1};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.mailinglist);
    };
       //POST
        $scope.clickButton = function(mailinglistData){

            //mailinglistData.fan_id = fan.fan_id;

            console.log("I'm clicked!", mailinglistData);

            $http.post('/mailinglist/mailinglist', mailinglistData).then(function(response){

                $scope.reset();
                //$scope.getPeople();

               console.log('This is mailinglists', $scope.mailinglists);
           });
    };
    //GET
    //$scope.getPeople = function(){
    //    $http.get('/data').then(function(response){
    //        $scope.mailingList = response.data;
    //    });
    //};
    //$scope.reset();
}]);
