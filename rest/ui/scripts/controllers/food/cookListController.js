angular.module('expressApp').controller('cookListController', ['$scope','$http','ngDialog', '$rootScope', function($scope , $http, ngDialog, $rootScope){

	$scope.cookId = '';

	function getAllCook() {
		$http.get('http://localhost:8090/api/cooks')
			.success(function(response) {
				if (response.length) {
					$scope.cookList = response;
				} else {
					alert('No cook online now');
				}
			})
			.error(function(error) {
				alert('Unable to fetch cooklist');
			});
	}
	getAllCook();

	$scope.onCookSelection = function(){
		var itemList = [];
		for(var i=0;i<$scope.cookList.length;i++){
			if($scope.cookId === $scope.cookList[i]._id )
			{
				itemList = $scope.cookList[i].fooditem_ids ;
				break;
			}
		}

		$http.post('http://localhost:8090/api/foods/findfoods', {
				'foodIds': itemList
			})
			.success(function(response) {
				$scope.foodList = response.list ;
			})
			.error(function(error) {
				alert('Unable to get Item');
			});
	}


	 $scope.deleteCook = function() {
        $http.delete('http://localhost:8090/api/cooks/deleteCook/' + $scope.cookId)
            .success(function(response) {
               alert(response.message);
            })
            .error(function(error) {
				alert('Unable to delete cook');
			});
    };


}]);

