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
      .when('/bridal-party', {
        templateUrl: 'views/bridal-party.html',
        controller: 'bridalPartyCtrl',
        activetab: 'bridal-party'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'locationCtrl',
        activetab: 'location'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
