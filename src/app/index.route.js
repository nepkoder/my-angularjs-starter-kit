(function() {
  'use strict';

  angular
    .module('NepKoder')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');
      
  }

})();
