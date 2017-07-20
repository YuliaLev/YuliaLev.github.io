'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function( $locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    // $routeProvider
    //     .when('/404',{
    //         templateUrl: "Views/main.html"
    //     })
    //     .otherwise({redirectTo: '/404'});
}]);