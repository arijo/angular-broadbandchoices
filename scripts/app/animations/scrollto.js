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
