myApp.controller('library', ['$scope', '$http', function($scope, $http){

    $scope.speechArray=[];
    $scope.selectedSpeech={};

    $scope.getSpeeches = function(){
        console.log($scope.speechArray);

        $http.get('/speeches').then(
            function(response){
                console.log(response.data);
                $scope.speechArray = response.data;
            });
    };
    $scope.getSpeeches();
}]);