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
            controller: "SliderController"
        }).
        when('/speech', {
            templateUrl: "assets/views/routes/library.html"
            //controller:
        }).
        otherwise({
            redirectTo:'home'
        })
}]);

