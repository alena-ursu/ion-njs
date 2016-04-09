angular.module('client.controllers', [])

.controller('HomeController', ['$scope', '$state', '$ionicHistory', 'CarsResource', function($scope, $state, $ionicHistory, CarsResource){


  $scope.cars = CarsResource;
  //
  //LinkService.testConnection.then(function(res){
  //  $scope.status = "connected!";
  //}, function(err){
  //  $scope.status = "connection failed :(";
  //});


}]);
