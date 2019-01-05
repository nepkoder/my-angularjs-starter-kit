(function() {
  'use strict';

  angular
    .module('NepKoder')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
