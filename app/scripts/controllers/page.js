'use strict';

angular.module('sagaApp')
  .controller('PageCtrl', function ($scope, $route) {
    $scope.pageOptions = {};
    $scope.$route = $route;
  });
