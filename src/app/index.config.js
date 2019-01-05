(function() {
  'use strict';

  angular
    .module('NepKoder')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
