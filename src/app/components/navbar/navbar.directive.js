(function() {
  'use strict';

  angular
    .module('firstAngularPro')
    .directive('blogNavbar', blogNavbar)
    .directive('blogSidebar', blogSidebar)
    .directive('blogFooter', blogFooter);

  /** @ngInject */
  function blogNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/common/navbar.html',
      controller: NavbarController,
      controllerAs: 'vmn',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vmn = this;
    }
  }

  function blogSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/common/sidebar.html',
      controller: SidebarController,
      controllerAs: 'vms',
      bindToController: true
    };

    return directive;

    function SidebarController() {
      var vms = this;
    }
  }

    function blogFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/common/footer.html',
      controller: footerController,
      controllerAs: 'vmf',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function footerController() {
      var vmf = this;
    }
  }

})();
