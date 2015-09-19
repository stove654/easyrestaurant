'use strict';

/**
 * @ngdoc overview
 * @name easyrestaurantApp
 * @description
 * # easyrestaurantApp
 *
 * Main module of the application.
 */
angular
  .module('easyrestaurantApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ionic',
    'pascalprecht.translate',
    'firebase',
    'LocalStorageModule'
  ])

  .run(function ($rootScope, $state, $location, SessionService) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {

      var shouldLogin = toState.data !== undefined
        && toState.data.requireLogin
        && !SessionService.isToken().isLoggedIn ;

      // NOT authenticated - wants any private stuff
      if(shouldLogin)
      {
        $state.go('login');
        event.preventDefault();
        return;
      }

      // authenticated (previously) comming not to root main
      if(SessionService.isToken().isLoggedIn)
      {
        var shouldGoToMain = fromState.name === ""
          && toState.name !== "main" ;
        return;
      }

    });
  })

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "views/login.html",
        controller: 'LoginCtrl'
      })
      .state('main', {
        url: "/main",
        templateUrl: "views/main.html",
        controller: 'MainCtrl'
      })

    $urlRouterProvider.otherwise("/main");
    $ionicConfigProvider.views.transition('none');
    $ionicConfigProvider.views.maxCache(0);
  });
