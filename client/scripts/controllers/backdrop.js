myApp.controller('SliderController', ['$scope', 'DeliveryFactory', function($scope, DeliveryFactory){
    $scope.deliveryBackdrop={};
    //$scope.DeliveryFactory = DeliveryFactory;
    $scope.images= [{
        src:'/assets/styles/images/hayBackdrop.png',
        title:'Hay Backdrop'
    }, {
        src: '/assets/styles/images/ovalOfficeBackdrop.png',
        title: 'Oval Office'
    }, {
        src: '/assets/styles/images/cowBackdrop.png',
        title: 'Cow Backdrop'
    },{
        src: '/assets/styles/images/stateFairBackdrop.png',
        title: 'State Fair'
    },{
        src: '/assets/styles/images/cowboyBackdrop.png',
        title: 'Cowboy Backdrop'
    }];

    $scope.imageValue = DeliveryFactory.addImage();

    console.log("YES");
    $scope.test = function(){
        console.log("Yupper do");
    };

    $scope.imageFunc = function(newValue){
        console.log("I'm imageFunc");
        $scope.imageValue.image = newValue;
        DeliveryFactory.addImage(newValue);
    };
    //$scope.selectBackdrop = function(image){
    //    $scope.deliveryBackdrop = image;
    //    console.log($scope.deliveryBackdrop);
    //};
}]);

myApp.directive('slider', ['$timeout', 'DeliveryFactory', function($timeout, DeliveryFactory){
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link: function (scope, elem, attrs) {

            scope.currentIndex=0;

            scope.next=function(){
                scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
            };

            scope.prev=function(){
                scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
            };

            scope.$watch('currentIndex',function(){
                scope.images.forEach(function(image){
                    image.visible=false;
                });
                scope.images[scope.currentIndex].visible=true;
            });

            /* Start: For Automatic slideshow*/

            var timer;

            var sliderFunc=function(){
                timer=$timeout(function(){
                    scope.next();
                    timer=$timeout(sliderFunc,5000);
                },5000);
            };

            //scope.imageFunc = function(image){
            //    DeliveryFactory.getImage();
            //};
            //scope.DeliveryFactory = DeliveryFactory;
            //scope.selectBackdrop = function(image){
            //    scope.deliveryBackdrop = image;
            //    console.log(scope.deliveryBackdrop);


            //};

            sliderFunc();

            scope.$on('$destroy',function(){
                $timeout.cancel(timer);
            });

            /* End : For Automatic slideshow*/
        },
        templateUrl: '/assets/views/templates/templateurl.html'

    };
}]);