myApp.controller('library', ['$scope', '$http', function($scope, $http) {
    $scope.deliveryObject = {};
    $scope.speechArray = [];
    $scope.IsVisible;

    $scope.getSpeeches = function(){
        console.log($scope.speechArray);

        $http.get('/speeches').then(
            function(response){
                console.log(response.data);
                $scope.speechArray = response.data;
            });
    };

    $scope.selectSpeech = function(speech){
        $scope.deliveryObject = speech;
        console.log($scope.deliveryObject);
    };

    $scope.getSpeeches();
}]);