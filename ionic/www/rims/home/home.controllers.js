angular.module('home.controllers', [])

.controller('HomeController', ['$scope', '$state', 'LinkService', 'CarsResource', '$ionicHistory', '$timeout', function($scope, $state, LinkService, CarsResource, $ionicHistory, $timeout){

  $scope.cars = CarsResource;

  $scope.refresh = function(){

    $ionicHistory.clearCache();

    LinkService.getCars().then(function(data){

      $timeout(function(){
        $scope.cars = data;
      }, 100);

      $timeout(function(){
        $scope.$broadcast('scroll.refreshComplete');
      },200);
    });
  };



  $scope.deleteCar = function(id){
    LinkService.deleteCar(id).then(function(){
      LinkService.getCars().then(function(data){
        $timeout(function(){
          $scope.cars = data;
        }, 10);
      });
    });
  };
}]);
