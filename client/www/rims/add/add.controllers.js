angular.module('add.controllers', [])

.controller('AddController', ['$scope', 'AddService', function($scope, AddService){

  $scope.add = function(){
    AddService.addCar();
  };

}]);
