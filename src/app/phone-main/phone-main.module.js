'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneMain', [
  'ngAnimate',
  'ngRoute',
  'phonecatApp.template',
  'phonecatApp.phoneCommon',
  'phonecatApp.phoneList',
  'phonecatApp.phoneSearch',
  'phonecatApp.phoneDetail',
]);
