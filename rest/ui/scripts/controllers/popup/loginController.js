/**
* expressApp Module
*
* Description
*/
angular.module('expressApp').controller('loginController', ['$scope','$http','ngDialog','$facebook','$rootScope','$location', function($scope , $http, ngDialog, $facebook, $rootScope, $location){

    

  $scope.isLoggedIn = false;
  $scope.login = function() {
    $facebook.login().then(function() {
      refresh();
    });
  }
  function refresh() {
    $facebook.api("/me").then( 
      function(response) {
        $scope.welcomeMsg = "Welcome " + response.name;
        $scope.isLoggedIn = true;
        $rootScope.message = $scope.welcomeMsg ;
        $scope.closeThisDialog('');
        $scope.closeThisDialog('');
        $location.url('main');
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
       
      });
  }
  
 // refresh();


  $scope.signOutFromFacebookLogIn = function()
   {
       
      $facebook.logout().then(function(response){
        $scope.isLoggedIn = false;
        $scope.welcomeMsg = "";
         $rootScope.message = $scope.welcomeMsg ;
        console.log(response);
      })
       
   };

  $scope.$on("logOutEvt", function(event, args) {
    $scope.value = args.value;
    alert($scope.value);
  });

  $scope.signWithPassport = function() {
    $http.get('http://localhost:8090/api/login/' + $scope.user.email)
      .success(function(response) {
        if (response.length) {
          if ($scope.user.email === response[0].email && $scope.user.passWord === response[0].passWord) {
            $scope.welcomeMsg = "Welcome " + response[0].email;
            $scope.isLoggedIn = true;
            $rootScope.isLoggedIn = true;
            $rootScope.message = $scope.welcomeMsg;
            $scope.closeThisDialog('');
            $location.url('main');
          }
        } else {
          $rootScope.isLoggedIn = false;
          $scope.isLoggedIn = false;
          $scope.welcomeMsg = "";
          $rootScope.message = $scope.welcomeMsg;
           alert('Invalid user');
        }
      })
      .error(function(error) {
        alert(error);
      });

  }
	
}])