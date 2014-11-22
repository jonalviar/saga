'use strict';

describe('Controller: locationCtrl', function () {

  // load the controller's module
  beforeEach(module('sagaApp'));

  var locationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    locationCtrl = $controller('locationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
