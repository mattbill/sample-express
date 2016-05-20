'use strict';

angular.module('myApp').controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
    var vm = this;


    //PUBLIC

    function submit() {
        $state.go('home');
    }


    vm.submit = submit;
}]);