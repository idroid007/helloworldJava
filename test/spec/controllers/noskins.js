'use strict';

describe('Controller: NoskinsCtrl', function () {

  // load the controller's module
  beforeEach(module('nohaxApp'));

  var NoskinsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoskinsCtrl = $controller('NoskinsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoskinsCtrl.awesomeThings.length).toBe(3);
  });
});
