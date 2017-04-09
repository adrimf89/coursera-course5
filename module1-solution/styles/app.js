(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "Please enter data first";
  $scope.messageStyle = {color:'red'};
  $scope.inputStyle = {border: '1px solid red'};

  $scope.checkIfTooMuch = function () {
    var arrayOfStrings = $scope.items.split(",");
    var items = 0;

    for (var i = 0; i < arrayOfStrings.length; i++){

      if (arrayOfStrings[i].trim() != ""){
        items++;
      }
    }

    if (items == 0){
      $scope.message = "Please enter data first";
      $scope.messageStyle = {color:'red'};
      $scope.inputStyle = {border: '1px solid red'};
    } else if (items < 4){
      $scope.message = "Enjoy!";
      $scope.messageStyle = {color:'green'};
      $scope.inputStyle = {border: '1px solid green'};
    } else {
      $scope.message = "Too much!";
      $scope.messageStyle = {color:'green'};
      $scope.inputStyle = {border: '1px solid green'};
    }
  };
}

})();
