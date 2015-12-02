myApp.controller('login', ['$scope', function($scope){
 $scope.name ="Login please";
    $scope.FBLogin = function(){
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');

                    var accessToken = FB.getAuthResponse();
                    console.log(accessToken);
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }
}]);

