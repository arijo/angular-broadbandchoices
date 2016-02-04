(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
    'use strict';

    var app = angular.module('app', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {

      var baseUrl = 'scripts/app/templates';
      $stateProvider
        .state('bundle', {
          abstract: true,
          controller: 'BundleCtl as bundle',
          templateUrl: baseUrl + '/bundle.html',
        })
        .state('bundle.info', {
          views: {
            'provider': {
              templateUrl: baseUrl + '/bundle/provider.html',
              controller: 'ProviderCtl as provider'
            },
            'costs': {
              templateUrl: baseUrl + '/bundle/costs.html',
              controller: 'CostsCtl as costs'
            },
            'broadband': {
              templateUrl: baseUrl + '/bundle/broadband.html',
              controller: 'BroadbandCtl as broadband'
            },
            'phone': {
              templateUrl: baseUrl + '/bundle/phone.html',
              controller: 'PhoneCtl as phone'
            }
          }
        })
       .state('bundle.info.provider', {
          url: '/provider'
        })
       .state('bundle.info.costs', {
          url: '/costs',
        })
        .state('bundle.info.broadband', {
          url: '/broadband',
        })
        .state('bundle.info.phone', {
          url: '/phone',
        });
    });

    app.run(function($state) {
      $state.go('bundle.info.provider');
    });

})();

},{}],2:[function(require,module,exports){
(function() {
    'use strict';

    function to(id) {
      var el = angular.element('#'+id);
      $('html,body').animate({
        scrollTop: el.offset().top
      }, 1000);
    }

    function $scroll() {
      return {
        to: to
      }
    }

    $scroll.$inject = [];

    angular.module('app')
      .factory('$scroll', $scroll);
})();

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
(function() {
    'use strict';

    var Bundle = require('./bundle/ajax.js');

    function $bundle($q, $http) {
      var bundle = new Bundle($q, $http);
      return {
        get: function() {
          return bundle.fetch();
        }
      }
    }

    $bundle.$inject = ['$q','$http'];

    angular.module('app')
      .factory('$bundle', $bundle);
})();

},{"./bundle/ajax.js":9}],9:[function(require,module,exports){
var __bundles;

function Bundle($q, $http) {
  this.$q = $q;
  this.$http = $http;
}

Bundle.fn = Bundle.prototype;

Bundle.fn.fetch = function() {
  var protocol = 'http://';
  var hostname = 'localhost:9000/Bundles.svc/json/GetBundles';
  var q = '?id=44';
  var url = protocol + hostname + q;
  var deferred = this.$q.defer();
  var self = this;

  if(__bundles) {
    return deferred.resolve(self);
  }

  this.$http({
    method: 'GET',
    url: url,
    transformResponse: function(data) {
      return $.parseXML(data);
    }
  })
  .success(function(rawXml) {
    __bundles = JSON.parse(
      $(rawXml).find('string').text()
    );
    deferred.resolve(self);
  })
  .error(function(xml, status, headers, config) {
    console.log('ERROR LOADING BUNDLES FROM THE REMOTE API');
  });
  
  return deferred.promise; 
}

Bundle.fn.get = function(i) {
  var bundleList = __bundles['bundleList'];
  return bundleList[i];
}

module.exports = Bundle;


},{}],10:[function(require,module,exports){
require("./app.js");
require("./app/factories/bundle/ajax.js");
require("./app/factories/bundle.js");
require("./app/controllers/bundle.js");
require("./app/controllers/bundle/provider.js");
require("./app/controllers/bundle/costs.js");
require("./app/controllers/bundle/broadband.js");
require("./app/controllers/bundle/phone.js");
require("./app/animations/scrollto.js");


},{"./app.js":1,"./app/animations/scrollto.js":2,"./app/controllers/bundle.js":3,"./app/controllers/bundle/broadband.js":4,"./app/controllers/bundle/costs.js":5,"./app/controllers/bundle/phone.js":6,"./app/controllers/bundle/provider.js":7,"./app/factories/bundle.js":8,"./app/factories/bundle/ajax.js":9}]},{},[10]);
