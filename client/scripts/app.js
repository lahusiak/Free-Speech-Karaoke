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

myApp.factory('DeliveryFactory', [function(){

    //var deliveryObject = {};

    var factory = {};

    factory.deliveryArray = [];

    factory.deliveryObject = {};

    factory.addSpeech = function(object){
        //factory.deliveryArray.push({text: object});
        factory.deliveryObject["selectedSpeech"]=object;
        //console.log("deliveryArray", factory.deliveryArray);
        console.log("deliveryArray", factory.deliveryObject);
        //return factory.deliveryArray;
        //return factory.deliveryObject;
    };

    factory.addImage = function(object){
        //factory.deliveryArray.push({image: object});
        factory.deliveryObject["selectedImage"]=object;
        //console.log("deliveryArray", factory.deliveryArray);
        console.log("deliveryArray", factory.deliveryObject);
        //return factory.deliveryArray;
        //return factory.deliveryObject;
    };

    //var deliveryApi = {
    //    makeSpeech: function(){
    //    addSpeech();
    //},
    //
    //    displaySpeech: function(){
    //       return deliveryArray;
    //    }
    //
    //};
    return factory;
}]);

//myApp.factory("Performance", function(){
//    return function(text, image){
//        return {
//            text: text,
//            image: image
//        }
//
//    }
//});

