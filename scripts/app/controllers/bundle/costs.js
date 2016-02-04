(function() {
    'use strict';

    function CostsCtl($rootScope, $scope, $state, $bundle, $scroll) {
      var vm = this;
      $bundle.get().then(function(bundles) {
        vm.info = bundles.get(0);
        vm.info.costs = vm.info.costsWithoutLineRental;
        vm.showWithoutLineRental = true;
      });

      $scope.$watch(function() { return vm.showWithoutLineRental; }, function(showWithoutLineRental) {
        if(!vm.info) return;
        if(showWithoutLineRental) {
          return (vm.info.costs = vm.info.costsWithoutLineRental);
        };
        vm.info.costs = vm.info.costsWithLineRental;
      });

      $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams) {
        if(toState.name === 'bundle.info.costs') {
          vm.tilt = 'tilt';
          return $scroll.to('costs');
        }
        vm.tilt = '';
      });
    }

    CostsCtl.$inject = [
      '$rootScope',
      '$scope', 
      '$state', 
      '$bundle',
      '$scroll'
    ];

    angular.module('app')
      .controller('CostsCtl', CostsCtl);
})();
