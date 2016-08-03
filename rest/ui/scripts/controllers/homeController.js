angular.module('expressApp').controller('homeController', ['$scope','$http','ngDialog', '$rootScope', function($scope , $http, ngDialog, $rootScope){

	
    $scope.items = [1, 2, 3]; 

	

   $scope.signOutFromFacebookLogIn = function()
   {
       //$rootScope.$broadcast("logOutEvt");

       $scope.$root.$broadcast("logOutEvt", {
            value: "From controller 2"
        });
   };

   $scope.showDialog = function($event) {
   	ngDialog.open({ template: '../views/popup/login.html',
    className: 'ngdialog-theme-default',
    overlay : true,
    showClose : true,
    closeByDocument : false,
    controller : 'loginController',
    scope: $scope
   	 });
   }
     

 $scope.signMeUp = function($event) {
    ngDialog.open({ template: '../views/popup/signup.html',
    className: 'ngdialog-theme-default',
    overlay : true,
    showClose : true,
    closeByDocument : false,
    controller : 'signUpController',
    scope: $scope
     });
   }

	$scope.signMeIn = function(){
      alert('sign in')
	};


	
}]);

