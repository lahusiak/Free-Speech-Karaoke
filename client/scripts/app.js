/**
 * Created by lahusiak on 11/12/15.
 */
var myApp = angular.module("myApp", ['ngRoute', 'ui.grid', 'ngAnimate']);

window.fbAsyncInit = function() {
    FB.init({
        appId      : '796300190497596',
        xfbml      : true,
        version    : 'v2.5'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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
        when('/deliver', {
            templateUrl: "assets/views/routes/deliver.html",
            controller: "deliverSpeech"
        }).
        when('/login', {
            templateUrl: "assets/views/routes/login.html",
            controller: "login"
        }).
        otherwise({
            redirectTo:'home'
        })
}]);

myApp.factory('DeliveryFactory', [function(){

    //var deliveryObject = {};

    //var factory = {};

    var deliveryArray = [];

    var deliveryObject = {
        speechText:"",
        image:""
    };

    //factory.deliveryArray = [];
    //
    //factory.deliveryObject = {
    //
    //};


    return {
        addSpeech: function(speech){
            deliveryObject.speechText = speech;
            console.log("deliveryObject with speech", deliveryObject);
            return deliveryObject;
        },
        addImage: function(image){
            deliveryObject.image = image;
            console.log("deliveryObject with image", deliveryObject);
            return deliveryObject;
        },

        getSpeech: function(){
            return deliveryObject.speechText;
        },

        getImage: function(){
            return deliveryObject.image;
        },

        getObject: function(){
            return deliveryObject;
        }
    };

    //factory.addSpeech = function(object){
    //
    //    factory.deliveryObject["selectedSpeech"]= object;
    //
    //    factory.deliveryArray.push(factory.deliveryObject);
    //
    //    //console.log("deliveryArray", factory.deliveryArray);
    //
    //    console.log("deliveryArray", factory.deliveryArray);
    //
    //    return factory.deliveryArray;
    //
    //    //return factory.deliveryObject;
    //};

    //factory.addImage = function(image){
    //    //factory.deliveryArray.push({image: object});
    //
    //    factory.deliveryObject["selectedImage"]=image;
    //
    //    factory.deliveryArray.push(factory.deliveryObject);
    //    //console.log("deliveryArray", factory.deliveryArray);
    //
    //    console.log("deliveryArray", factory.deliveryArray);
    //
    //    return factory.deliveryArray;
    //    //return factory.deliveryObject;
    //};

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
    //return factory;
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

