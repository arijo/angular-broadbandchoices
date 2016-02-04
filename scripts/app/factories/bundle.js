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
