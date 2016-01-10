/**
 * Created by lahusiak on 11/12/15.
 */
var myApp = angular.module("myApp", ['ngRoute', 'ui.grid', 'ngAnimate']);


(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//APP CONFIGURATION

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
        //when('/login', {
        //    templateUrl: "assets/views/routes/login.html",
        //    controller: "login"
        //}).
        otherwise({
            redirectTo:'home'
        })
}]);

//FACTORIES

myApp.factory('DeliveryFactory', [function(){

    var deliveryObject = {
        speechText:"",
        image:""
    };

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

}]);


