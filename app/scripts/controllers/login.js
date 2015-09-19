'use strict';

/**
 * @ngdoc function
 * @name easyrestaurantApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the easyrestaurantApp
 */
angular.module('easyrestaurantApp')
  .controller('LoginCtrl', function ($scope, APP_CONFIG, localStorageService, $state) {

    var ref = new Firebase(APP_CONFIG.baseUrl);

    $scope.user = {
      email: 'loi@hottab.net',
      password: 'vanloi'
    };

    $scope.login = function () {
      var user = angular.copy($scope.user);
      ref.authWithPassword(user, function(error, userData) {
         if (error) {
           console.log("Error creating user:", error);
         } else {
           localStorageService.set('user', userData);
           $state.go('main');
           console.log("Successfully created user account with uid:", userData);
         }
       });
    };

    $scope.loginFacebook = function () {
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Authentication Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          localStorageService.set('user', authData);
          $state.go('main');
        }
      });
    }

    $scope.loginGoogle = function () {
      ref.authWithOAuthPopup("google", function(error, authData) {
        if (error) {
          console.log("Authentication Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          localStorageService.set('user', authData);
          $state.go('main');
        }
      });
    }


  });
