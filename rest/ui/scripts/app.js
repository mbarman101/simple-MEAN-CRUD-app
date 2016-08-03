/**
*  Module
*
* Description
*/
angular.module('expressApp', ['ngRoute','ngMaterial','ngMdIcons','ngDialog','ngFacebook']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl : 'views/home.html',
		controller : 'homeController'
		})
	.when('/main',{
		templateUrl : 'views/main.html',
		controller : 'mainController'
	})
	.otherwise({
		redirectTo : '/'});
	}]).config( function( $facebookProvider ) {
  $facebookProvider.setAppId('1711169629095198');
}).run( function( $rootScope ) {
  // Load the facebook SDK asynchronously
  (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = 'http://connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());
});