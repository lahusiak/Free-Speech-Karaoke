myApp.controller('formCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.mailingList = [];
    $scope.master = {firstName: "John", lastName: "Doe", email: "person@email.com"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
        $scope.sendData = function(){
           $http.post('/data').then(function(response){
              $scope.mailingList = response.data;
               console.log('This is mailingList', $scope.mailingList);
           })
        }
    };
    $scope.reset();
}]);
