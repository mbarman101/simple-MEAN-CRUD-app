angular.module('expressApp').controller('mainController', ['$scope','$facebook','$rootScope','$location', function($scope, $facebook, $rootScope, $location){


  if($rootScope.isLoggedIn === false || $rootScope.isLoggedIn === undefined ){
  	$location.url('/');
  }
	
}])