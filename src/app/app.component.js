'use strict';

import angular from 'angular';

angular.module('phonecatApp')
  .component('phonecatApp', {
    controller: PhonecatAppController,
    controllerAs: 'phonecatAppVm',
    templateUrl: 'app.component.html',
  });


PhonecatAppController.$inject = [
  '$element',
];

function PhonecatAppController($element) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {}

  function postLink() {}

}
