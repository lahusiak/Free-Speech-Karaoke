myApp.controller('SliderController', ['$scope', function($scope){
    $scope.deliveryBackdrop={};
    $scope.images= [{
        src:'/assets/styles/images/img1.png',
        title:'Backdrop1'
    }, {
        src: '/assets/styles/images/img4.png',
        title: 'Backdrop2'
    }, {
        src: '/assets/styles/images/backdrop4.png',
        title: 'Backdrop3'
    },{
        src: '/assets/styles/images/img4.png',
        title: 'Backdrop4'
    },{
        src: '/assets/styles/images/img5.png',
        title: 'Backdrop5'
    }];

    //$scope.selectBackdrop = function(image){
    //    $scope.deliveryBackdrop = image;
    //    console.log($scope.deliveryBackdrop);
    //};
}]);

myApp.directive('slider', ['$timeout', function($timeout){
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

            scope.selectBackdrop = function(image){
                scope.deliveryBackdrop = image;
                console.log(scope.deliveryBackdrop);
            };

            sliderFunc();

            scope.$on('$destroy',function(){
                $timeout.cancel(timer);
            });

            /* End : For Automatic slideshow*/
        },
        templateUrl: '/assets/views/templates/templateurl.html'

    };
}]);