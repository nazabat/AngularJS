/**
 * Created by nazab on 6/6/2017.
 */

// Create module, controller and register the controller with the module, all in one line
var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope){
    var employee = {
        firstName: 'Nazabat',
        lastName: 'Hussain',
        gender: 'Male'
    };
  $scope.employee = employee;
});

