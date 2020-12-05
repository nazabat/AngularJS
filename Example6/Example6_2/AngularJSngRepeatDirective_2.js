/**
 * Created by nazab on 7/6/2017.
 */
var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var countries = [
            {
                name: "UK",
                cities: [
                    { name: "London" },
                    { name: "Birmingham" },
                    { name: "Manchester" }
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }
                ]
            },
            {
                name: "India",
                cities: [
                    { name: "Hyderabad" },
                    { name: "Chennai" },
                    { name: "Mumbai" }
                ]
            }
        ];

        $scope.countries = countries;
    });