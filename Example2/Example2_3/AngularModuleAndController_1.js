/**
 * Created by nazab on 6/6/2017.
 */

// Create Module
var myApp = angular.module("myModule", []);

// Create & Register Controller with Module
myApp.controller("myController", function($scope){
    $scope.message = "AngularJS Tutorial";
});