myApp.controller('SliderController', ['$scope', function($scope){
    $scope.images= [{
        src:'/assets/styles/images/backdrop1.jpeg',
        title:'Backdrop1'
    }, {
        src: '/assets/styles/images/backdrop2.jpeg',
        title: 'Backdrop2'
    }, {
        src: '/assets/styles/images/backdrop3.jpeg',
        title: 'Backdrop3'
    },{
        src: '/assets/styles/images/backdrop4.png',
        title: 'Backdrop4'
    },{
        src: '/assets/styles/images/backdrop5.jpeg',
        title: 'Backdrop5'
    }];
}]);

myApp.directive('slider', ['$timeout', function($timeout){
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link: function(scope, elem, attrs) {
            scope.currentIndex = 0; //initially the index is at the first image
            scope.next = function () {
                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };
            scope.prev = function(){
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            };
            scope.$watch('currentIndex', function(){
                scope.images.forEach(function(image){
                    image.visible = false;//make every image invisible
                });
                scope.images[scope.currentIndex].visible = true; //make the current image visible
            });
        },
        templateUrl: '/assets/views/templates/templateurl.html'

    };
}]);