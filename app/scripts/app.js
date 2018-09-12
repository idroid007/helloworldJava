'use strict';

/**
 * @ngdoc overview
 * @name nohaxApp
 * @description
 * # nohaxApp
 *
 * Main module of the application.
 */
angular
  .module('nohaxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/noskins', {
        templateUrl: 'views/noskins.html',
        controller: 'NoskinsCtrl',
        controllerAs: 'NoSkins'
      })
      .when('/noexternal', {
        templateUrl: 'views/nohaxexternal.html',
        controller: 'NohaxexternalCtrl',
        controllerAs: 'NoHaxExternal'
      })
      .when('/nointernal', {
        templateUrl: 'views/nohaxinternal.html',
        controller: 'NohaxinternalCtrl',
        controllerAs: 'NoHaxInternal'
      })
      .when('/copyrights', {
        templateUrl: 'views/copyrights.html',
        controller: 'CopyrightsCtrl',
        controllerAs: 'copyrights'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'FAQ'
      })
      .otherwise({
        redirectTo: '/'
      });
  
  });
