let port = angular.module('PortfolioControllers');

port.controller('HomeController', ['$scope', function($scope) {
    let jq = $.noConflict();

    jq('.projects').unslider({
      // autoplay: true
    });

}]);
