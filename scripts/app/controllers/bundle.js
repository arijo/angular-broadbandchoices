(function() {
    'use strict';

    function BundleCtl($rootScope, $scope, $state, $bundle) {
      var vm = this;

      $bundle.get().then(function(bundles) {
        vm.info = bundles.get(0);
      });
    }

    BundleCtl.$inject = ['$rootScope', '$scope', '$state', '$bundle'];

    angular.module('app')
      .controller('BundleCtl', BundleCtl);
})();
