'use strict';

describe('Controller: NohaxexternalCtrl', function () {

  // load the controller's module
  beforeEach(module('nohaxApp'));

  var NohaxexternalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NohaxexternalCtrl = $controller('NohaxexternalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NohaxexternalCtrl.awesomeThings.length).toBe(3);
  });
});
