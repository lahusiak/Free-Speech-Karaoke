/**
 * Created by lahusiak on 11/12/15.
 */
var myApp = angular.module("myApp", ['ngRoute', 'ui.grid', 'ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html",
            controller: "library"
        }).
        when('/about', {
            templateUrl: "assets/views/routes/about.html"
        }).
        when('/contact', {
        templateUrl: "assets/views/routes/contact.html",
            controller: "contact"
        }).
        when('/library', {
            templateUrl: "assets/views/routes/library.html",
            controller: "library"
        }).
        when('/backdrop', {
            templateUrl: "assets/views/routes/backdrop.html",
            controller: "SliderController",
            directive:"slider"
        }).
        //when('/deliver', {
        //    templateUrl: "assets/views/routes/deliver.html",
        //    controller: "deliver"
        //}).
        otherwise({
            redirectTo:'home'
        })
}]);

myApp.service('deliver', function(){

    var delivery = {};
    var deliverArray = [];

    var addObject = function(object){
        //var newdeliverArray = deliverArray.push(object);
        deliverArray = object;
        console.log("deliveryArray", deliverArray);
        return deliverArray;
    };

    var deliverApi = {
        makeSpeech: function(){
        addObject();
    },

        displaySpeech: function(){
           return deliverArray;
        }

    };
    return deliverApi;
});

