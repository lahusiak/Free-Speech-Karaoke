myApp.controller('deliverSpeech', ['$scope','DeliveryFactory', function($scope, DeliveryFactory ){

    $scope.karaokeObject = DeliveryFactory.getObject();

    //$scope.facebookLike = function(){
    //    console.log("Facebook Like");
    //    FB.Like(function(d, s, id) {
    //            var js, fjs = d.getElementsByTagName(s)[0];
    //            if (d.getElementById(id)) return;
    //            js = d.createElement(s); js.id = id;
    //            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=796300190497596";
    //            fjs.parentNode.insertBefore(js, fjs);
    //        }(document, 'script', 'facebook-jssdk'));
    //    };

    //$scope.DeliveryFactory = DeliveryFactory;
    //$scope.images= [{
    //    src:'/assets/styles/images/hayBackdrop.png',
    //    title:'Hay Backdrop'
    //}];
    //
    //$scope.speeches= [{
    //    title: "Gettysburg",
    //    speaker: "Lincoln",
    //    text:"For score and seven years ago"
    //}];
    //
    //$scope.karaokeArray=[{
    //        src: '/assets/styles/images/hayBackdrop.png',
    //        title: 'Hay Backdrop'
    //},
    //    {
    //        title: "Gettysburg",
    //        speaker: "Lincoln",
    //        text:"For score and seven years ago"
    //    }
    //];


    //$scope.deliver = function(object, object){
    //    $scope.deliveryArray= [object, object];
    //}

}]);
