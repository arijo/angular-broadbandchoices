(function() {
    'use strict';

    function PhoneCtl($rootScope, $scope, $state, $bundle, $scroll) {
      var vm = this;
      $bundle.get().then(function(bundles) {
        vm.info = bundles.get(0);
      });

      $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams) {
        if(toState.name === 'bundle.info.phone') {
          vm.tilt = 'tilt';
          return $scroll.to('phone');
        }
        vm.tilt = '';
      });
    }

    PhoneCtl.$inject = [
      '$rootScope',
      '$scope', 
      '$state', 
      '$bundle',
      '$scroll'
    ];

    angular.module('app')
      .controller('PhoneCtl', PhoneCtl);
})();
