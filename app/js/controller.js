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



            $scope.myInterval = 3000;
            $scope.slides = [
                {
                    image: 'js/AIV_GW_SneakyPete_Pilot_1500x300_v2._V313958519_.jpg'
                },
                {
                    image: 'js/Bueller-GW-C-04-StarWars-US-v3-1500x300._V315484437_.jpg'
                },
                {
                    image: 'js/FTVS-Evergreen-GW2-1500x300._V307293764_.jpg'
                },
                {
                    image: 'js/HERO_clothing_women_alt_1x._V316506662_.jpg'
                }
            ];

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
