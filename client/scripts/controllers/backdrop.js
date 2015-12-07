myApp.controller('SliderController', ['$scope', 'DeliveryFactory', function($scope, DeliveryFactory){
    $scope.deliveryBackdrop={};
    //$scope.DeliveryFactory = DeliveryFactory;
    $scope.images= [{
        src:'/assets/styles/images/sunset.png',
        title:'Nature Backdrop'
    }, {
        src: '/assets/styles/images/stockexchange.png',
        title: 'Flag Backdrop'
    }, {
        src: '/assets/styles/images/harvest.png',
        title: 'Field Backdrop'
    },{
        src: '/assets/styles/images/subway.png',
        title: 'Subway Fair'
    },{
        src: '/assets/styles/images/firework.png',
        title: 'Firework Backdrop'
    }];

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

            //sliderFunc();

            scope.imageValue = DeliveryFactory.addImage();

            scope.imageFunc = function(newValue){
                console.log("I'm imageFunc");
                scope.imageValue.image = newValue;
                DeliveryFactory.addImage(newValue);
            };

            scope.$on('$destroy',function(){
                $timeout.cancel(timer);
            });
            sliderFunc();
            /* End : For Automatic slideshow*/
        },

        templateUrl: '/assets/views/templates/slideshow.html'

    };
}]);