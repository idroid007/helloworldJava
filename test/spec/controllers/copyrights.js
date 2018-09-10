'use strict';

describe('Controller: CopyrightsCtrl', function () {

  // load the controller's module
  beforeEach(module('nohaxApp'));

  var CopyrightsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CopyrightsCtrl = $controller('CopyrightsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CopyrightsCtrl.awesomeThings.length).toBe(3);
  });
});
