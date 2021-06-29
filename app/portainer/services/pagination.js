import angular from 'angular';

import { PAGINATION_MAX_ITEMS } from '@/constants';

angular.module('portainer.app').factory('PaginationService', [
  'LocalStorage',
  function PaginationServiceFactory(LocalStorage) {
    'use strict';

    var service = {};

    service.getPaginationLimit = function (key) {
      var paginationLimit = PAGINATION_MAX_ITEMS;

      var storedLimit = LocalStorage.getPaginationLimit(key);
      if (storedLimit !== null) {
        paginationLimit = storedLimit;
      }
      return '' + paginationLimit;
    };

    service.setPaginationLimit = function (key, limit) {
      LocalStorage.storePaginationLimit(key, limit);
    };

    return service;
  },
]);
