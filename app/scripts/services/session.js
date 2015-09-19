'use strict';

/**
 * @ngdoc service
 * @name easyrestaurantApp.session
 * @easyrestaurantApp
 * # session
 * Service in the easyrestaurantApp.
 */
angular.module('easyrestaurantApp')
  .service('SessionService', function (localStorageService, $state) {

    var session = {};

    session.isToken = function () {
      var isLoggedIn = false;
      if (localStorageService.get('user')) {
        var user = localStorageService.get('user');
        if (user.token) {
          isLoggedIn = true;
        }
      }
      return {
        isLoggedIn: isLoggedIn
      };
    };

    return session;
  });
