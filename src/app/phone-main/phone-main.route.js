'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneMain')
  .config(routeConfig);

routeConfig.$inject = [
  '$locationProvider',
  '$routeProvider',
];

function routeConfig(
  $locationProvider,
  $routeProvider
) {

  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/phones', {
      templateUrl: 'phone-main.component.html',
    }).
    when('/phones/:phoneId', {
      template: 'WIP {{phoneMainVm.phoneId}}',
    }).
    otherwise('/phones');
}
