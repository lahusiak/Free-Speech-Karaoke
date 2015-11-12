/**
 * Created by lahusiak on 11/12/15.
 */
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html",
        }).
        when('/about', {
            templateUrl: "assets/views/routes/about.html",
        }).
        when('/contact', {
        templateUrl: "assets/views/routes/contact.html",
            controller: "mailinglist"
        }).
        otherwise({
            redirectTo:'home'
        })
}]);

