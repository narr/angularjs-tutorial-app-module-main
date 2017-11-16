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

  function init() {
    vm.onPhoneListImgClick = onPhoneListImgClick;
    vm.onPhoneListNameClick = onPhoneListNameClick;

    vm.phoneListOrderBy = 'age';
  }

  function postLink() {}

  function onPhoneListImgClick(id) {
    console.log(id); // eslint-disable-line no-console
  }

  function onPhoneListNameClick(id) {
    console.log(id); // eslint-disable-line no-console
  }

}
