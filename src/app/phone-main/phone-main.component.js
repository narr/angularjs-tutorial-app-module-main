'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneMain')
  .component('phoneMain', {
    controller: PhoneMainController,
    controllerAs: 'phoneMainVm',
    template: '<div class="view-container"><div ng-view class="view-frame"></div></div>',
  });


PhoneMainController.$inject = [
  '$element',
  '$location',
  '$scope',
];

function PhoneMainController(
  $element,
  $location,
  $scope
) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {
    vm.onPhoneListImgClick = onPhoneListImgClick;
    vm.onPhoneListNameClick = onPhoneListNameClick;
    vm.onPhoneSearchChange = onPhoneSearchChange;
    vm.onPhoneSelectChange = onPhoneSelectChange;

    vm.phoneListOrderBy = 'age';

    addRouteChangeWatcher();
  }

  function postLink() { }

  function onPhoneListImgClick(id) {
    handlePhoneListItemClick(id);
  }

  function onPhoneListNameClick(id) {
    handlePhoneListItemClick(id);
  }

  function handlePhoneListItemClick(id) {
    console.log(id); // eslint-disable-line no-console
    setPath('/' + id);
  }

  function setPath(path) {
    var currentPath = $location.path();
    $location.path(currentPath + path);
  }

  function addRouteChangeWatcher() {
    $scope.$on('$routeChangeStart', function ($event, next, current) {
      vm.phoneId = next.params.phoneId;
    });
  }

  function onPhoneSearchChange(search) {
    vm.phoneMainFilterQuery = search;
  }

  function onPhoneSelectChange(sort) {
    vm.phoneListOrderBy = sort;
  }

}
