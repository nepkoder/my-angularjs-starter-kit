(function() {
  'use strict';

  angular
    .module('NepKoder')
    .directive('blogNavbar', blogNavbar);

  /** @ngInject */
  function blogNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/common/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vmn = this;
    }
  }

})();
