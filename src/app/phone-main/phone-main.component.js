'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneMain')
  .component('phoneMain', {
    controller: PhoneMainController,
    controllerAs: 'phoneMainVm',
    template: '<div ng-view></div>',
  });


PhoneMainController.$inject = [
  '$element',
  '$location',
];

function PhoneMainController(
  $element,
  $location
) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {
    vm.onPhoneListImgClick = onPhoneListImgClick;
    vm.onPhoneListNameClick = onPhoneListNameClick;

    vm.phoneListOrderBy = 'age';
  }

  function postLink() { }

  function onPhoneListImgClick(id) {
    console.log(id); // eslint-disable-line no-console
    setPath('/' + id);
  }

  function onPhoneListNameClick(id) {
    console.log(id); // eslint-disable-line no-console
    setPath('/' + id);
  }

  function setPath(path) {
    var currentPath = $location.path();
    $location.path(currentPath + path);
  }

}
