var app = angular.module('PortfolioApp', ['ngRoute', 'PortfolioControllers']);
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
