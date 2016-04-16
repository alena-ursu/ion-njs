angular.module('add.services', [])

  .factory('AddService', ['$http', '$q', function($http, $q){

    return {

      addCar: function(){

        var q  = $q.defer(),
          self = this,
          url  = 'http://10.10.5.22:3000/cars';

        var req = {
          method: 'POST',
          url: url,
          data: {
            "name":        "Car-" + Math.random(),
            "brand":       "Dodge",
            "model":       "Viper",
            "descritpion": "This is the fast car ever.",
            "year":        "2001",
            "color":       "Silver, with stripe",
            "performance": "true",
            "luxury":      "false"
          },
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Origin': '*'
          }
        };

        $http(req)
          .success(function(data, status, headers, config){
            q.resolve(data);
          })
          .error(function(data, status, headers, config){
            q.reject(status);
          });

        return q.promise;
      }
    }

  }]);
