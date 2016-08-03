/**
 * expressApp Module
 *
 * Description
 */
angular.module('expressApp').controller('signUpController', ['$scope', '$http', 'ngDialog', '$facebook', '$rootScope', function($scope, $http, ngDialog, $facebook, $rootScope) {


  $scope.userObj = {};

  $scope.signUp = function() {
    $http.post('http://localhost:8090/api/signUp', {
        'email': $scope.userObj.email,
        'passWord': $scope.userObj.passWord
      })
      .success(function(response) {
        alert(response.message);
      })
      .error(function(error) {
        alert('Unable to sign up');
      });
  }

}]);