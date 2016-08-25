(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let port = angular.module('PortfolioControllers');

port.controller('HomeController', ['$scope', function($scope) {
    let jq = $.noConflict();

    jq('.projects').unslider({
      // autoplay: true
    });

}]);

},{}],2:[function(require,module,exports){
let app = angular.module('PortfolioApp', ['ngRoute', 'PortfolioControllers']);
angular.module('PortfolioControllers', []);       // create empty module
// angular.module('LibraryServices', []);          // create empty module
// angular.module('LibraryDirectives', []);        // create empty module

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'templates/home.html',
          controller: 'HomeController',
        })
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
        });
}]);

/* Controllers */
require('./controllers/home');

/* Services */

/* Directives */

},{"./controllers/home":1}]},{},[2])