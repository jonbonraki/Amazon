/**
 * Created by suryarakesh on 7/26/2015.
 */
'use strict';

/* App Module */

var phonecatApp = angular.module('Amazonapp', [
    'ngRoute',
    //'phonecatAnimations',

    'phonecatControllers',
  /*  /!*'phonecatFilters',
    'phonecatServices*!/'*/
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/searchbar', {
                templateUrl: 'partials/searchbar.html',
                controller: 'PhoneListCtrl'
            }).
            /*when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).*/
            otherwise({
                redirectTo: '/Suryasamazon'
            });
    }]);