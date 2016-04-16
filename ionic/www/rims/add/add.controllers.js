angular.module('add.controllers', [])

.controller('AddController', ['$scope', 'AddService', '$cordovaBarcodeScanner', function($scope, AddService, $cordovaBarcodeScanner){

  $scope.add = function(){
    AddService.addCar();
  };


  $scope.status = "DOESN\"T WORK";

  if(typeof cordova !== 'undefined'){

    $scope.status = "WORKS";

    $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
          // Success! Barcode data is here
          applyData(barcodeData);

      }, function(error) {
          applyData(error);
      });
  };

  function applyData(data){
    $scope.status = data;
    $scope.$apply();
  }


}]);
