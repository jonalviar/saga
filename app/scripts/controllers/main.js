'use strict';

/**
 * @ngdoc function
 * @name sagaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sagaApp
 */
angular.module('sagaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
