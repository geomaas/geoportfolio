var mod = angular.module('PortfolioControllers');

mod.controller('HomeController', ['$scope', function($scope) {
    var jq = $.noConflict();
setTimeout(function () {
  jq('.projects').unslider({
    // autoplay: true
  });
}, 0);
    

}]);
