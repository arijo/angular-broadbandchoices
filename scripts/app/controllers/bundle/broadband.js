(function() {
    'use strict';

    function BroadbandCtl($rootScope, $scope, $state, $bundle, $scroll) {
      var vm = this;
      $bundle.get().then(function(bundles) {
        vm.info = bundles.get(0);
      });

      $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams) {
        if(toState.name === 'bundle.info.broadband') {
          vm.tilt = 'tilt';
          return $scroll.to('broadband');
        }
	vm.tilt = '';
      });
    }

    BroadbandCtl.$inject = [
      '$rootScope',
      '$scope', 
      '$state', 
      '$bundle',
      '$scroll'
    ];

    angular.module('app')
      .controller('BroadbandCtl', BroadbandCtl);
})();
