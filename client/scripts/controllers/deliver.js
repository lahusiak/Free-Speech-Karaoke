myApp.controller('deliverSpeech', ['$scope','DeliveryFactory', function($scope, DeliveryFactory ){

    $scope.DeliveryFactory = DeliveryFactory;
    $scope.images= [{
        src:'/assets/styles/images/hayBackdrop.png',
        title:'Hay Backdrop'
    }];

    $scope.speeches= [{
        title: "Gettysburg",
        speaker: "Lincoln",
        text:"For score and seven years ago"
    }];

    $scope.karaokeArray=[{
            src: '/assets/styles/images/hayBackdrop.png',
            title: 'Hay Backdrop'
    },
        {
            title: "Gettysburg",
            speaker: "Lincoln",
            text:"For score and seven years ago"
        }
    ];
    //$scope.deliver = function(object, object){
    //    $scope.deliveryArray= [object, object];
    //}

}]);
