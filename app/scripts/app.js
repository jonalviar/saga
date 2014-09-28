'use strict';

/**
 * @ngdoc overview
 * @name sagaApp
 * @description
 * # sagaApp
 *
 * Main module of the application.
 */
angular
  .module('sagaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activetab: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
