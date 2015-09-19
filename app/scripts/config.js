'use strict';

/**
 * @ngdoc function
 * @name easyrestaurantApp.config:APP_CONFIG
 * @description
 * # APP_CONFIG
 * Controller of the easyrestaurantApp
 */
angular.module('easyrestaurantApp')
  .constant('APP_CONFIG', {
    baseUrl: 'http://easyrestaurant.firebaseio.com/'
  });