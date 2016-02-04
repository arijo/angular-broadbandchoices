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

