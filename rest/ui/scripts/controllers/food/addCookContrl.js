angular.module('expressApp').controller('addCookController', ['$scope','$http','ngDialog', '$rootScope', function($scope , $http, ngDialog, $rootScope){

$scope.cook = {};

	
$scope.addCook = function() {

    var cookObj = new Object();
    cookObj.name = new Object();
    cookObj.name.first = $scope.cook.fname;
    cookObj.name.last = $scope.cook.lname;
    cookObj.fooditem_ids = [];
    for(var i=0;i<$scope.foodList.length;i++){
      if($scope.foodList[i].selected === true){
        cookObj.fooditem_ids.push($scope.foodList[i]._id)
      }
   } 
    $http.post('http://localhost:8090/api/cooks/addcook', cookObj)
      .success(function(response) {
        alert(response.message);
      })
      .error(function(error) {
        alert('Unable to add Cook');
      });
  }

  function setSelectedFood () {
    for(var i=0;i<$scope.foodList.length;i++){
      $scope.foodList[i].selected = false;
   } 
  }
   
  $scope.getAllFoodItems = function() {
    $http.get('http://localhost:8090/api/foods')
      .success(function(response) {
        if (response.length) {
          $scope.foodList = response;
          setSelectedFood();
        } else {
          alert('No food items found');
        }
      })
      .error(function(error) {
        alert('Unable to fetch food items.');
      });
  }

  $scope.getAllFoodItems();	
}]);

