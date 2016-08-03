angular.module('expressApp').controller('addFoodController', ['$scope','$http','ngDialog', '$rootScope', function($scope , $http, ngDialog, $rootScope){

	
$scope.addFood = function() {
    $http.post('http://localhost:8090/api/foods/addFood', {
        'foodName': $scope.food.name
      })
      .success(function(response) {
        alert(response.message);
      })
      .error(function(error) {
        alert('Unable to add Item');
      });
  }

	
}]);

