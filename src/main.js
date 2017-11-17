'use strict';

import angular from 'angular';

angular.module('phonecatApp.template', []);

// use 'require' to import the module after 'angular.module('phonecatApp.template', []);'
require('angularjs-tutorial-app-module-1'); // or require('angularjs-tutorial-app-module-1/phone-list');
require('angularjs-tutorial-app-module-2');
require('angularjs-tutorial-app-module-3/phone-common');
require('angularjs-tutorial-app-module-3/phone-detail');
