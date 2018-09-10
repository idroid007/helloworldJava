'use strict';

describe('Controller: NohaxinternalCtrl', function () {

  // load the controller's module
  beforeEach(module('nohaxApp'));

  var NohaxinternalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NohaxinternalCtrl = $controller('NohaxinternalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NohaxinternalCtrl.awesomeThings.length).toBe(3);
  });
});
