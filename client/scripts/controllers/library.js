myApp.controller('library', ['$scope', '$http', 'deliver', function($scope, $http, deliver) {
    $scope.deliverySpeech = {};
    $scope.speechArray = [];
    $scope.IsVisible;
    $scope.deliver = deliver;

    $scope.getSpeeches = function(){
        console.log($scope.speechArray);

        $http.get('/speeches').then(
            function(response){
                //console.log(response.data);
                $scope.speechArray = response.data;
            });
    };

    //$scope.selectSpeech = function(){
    //    $scope.deliverySpeech = deliver.;
    //    console.log($scope.deliverySpeech);
    //};

    $scope.getSpeeches();
}]);