angular.module('client.services', [])

.factory('LinkService', ['$http', '$q', function($http, $q){

  return {

    getCars: function () {

      var q = $q.defer(),
          self = this,
          url = 'http://10.10.5.22:3000/cars';

      var req = {
        method: 'GET',
        url: url,
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Origin': '*'
        }
      };

      $http(req)
        .success(function (data, status, headers, config) {
          q.resolve(data);
        })
        .error(function (data, status, headers, config) {
          q.reject(status);
        });

      return q.promise;
    },

    deleteCar: function (id) {
      var q = $q.defer(),
          self = this,
          url = 'http://10.10.5.22:3000/cars/' + id;

      var req = {
        method: 'DELETE',
        url: url,
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Origin': '*'
        }
      };

      $http(req)
        .success(function (data, status, headers, config) {
          q.resolve(data);
        })
        .error(function (data, status, headers, config) {
          q.reject(status);
        });

      return q.promise;
    }

  }
}]);
