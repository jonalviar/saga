'use strict';

/**
 * @ngdoc function
 * @name sagaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sagaApp
 */
angular.module('sagaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
