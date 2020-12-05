/**
 * Created by nazab on 6/6/2017.
 */

// Create Module
var myApp = angular.module("myModule", []);

// Create Controller
myApp.controller("myController", function($scope){
    var employee = {
        firstName: 'Nazabat',
        lastName: 'Hussain',
        gender: 'Male'
    };
  $scope.employee = employee;
});

