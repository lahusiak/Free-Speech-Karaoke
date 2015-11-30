myApp.controller('library', ['$scope', '$http', 'DeliveryFactory', function($scope, $http, DeliveryFactory) {
    $scope.deliverySpeech = {};
    $scope.speechArray = [];
    $scope.IsVisible;
    $scope.DeliveryFactory = DeliveryFactory;

    $scope.getSpeeches = function(){
        console.log($scope.speechArray);

        $http.get('/speeches').then(
            function(response){
                //console.log(response.data);
                $scope.speechArray = response.data;
            });
    };

    $scope.selectSpeech = DeliveryFactory.addSpeech();
    //$scope.selectSpeech = function(){
    //
    //    console.log($scope.deliverySpeech);
    //};

    $scope.getSpeeches();
}]);