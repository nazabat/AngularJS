/**
 * Created by nazab on 6/6/2017.
 */
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var country = {
            name: "Islamic Republic of Pakistan",
            capital: "Islamabad",
            flag: "flag.png"
        };
        $scope.country = country;
    });