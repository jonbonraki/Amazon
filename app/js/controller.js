/**
 * Created by suryarakesh on 7/26/2015.
 */
'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope',
    function($scope) {
        $scope.phones = "uuuu";
        $scope.orderProp = 'age';
    }]);

/*
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);*/
