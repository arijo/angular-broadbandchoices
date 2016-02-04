(function() {
    'use strict';

    function ProviderCtl($rootScope, $scope, $state, $bundle, $scroll) {
      var vm = this;
      $bundle.get().then(function(bundles) {
        vm.info = bundles.get(0);
      });

      $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams) {
        if(toState.name === 'bundle.info.provider') {
          vm.tilt = 'tilt';
          return $scroll.to('provider');
        }
        vm.tilt = '';
      });
    }

    ProviderCtl.$inject = [
      '$rootScope',
      '$scope', 
      '$state', 
      '$bundle',
      '$scroll'
    ];

    angular.module('app')
      .controller('ProviderCtl', ProviderCtl);
})();
