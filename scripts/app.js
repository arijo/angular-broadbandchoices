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
