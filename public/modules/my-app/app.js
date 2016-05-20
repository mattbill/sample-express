'use strict';

angular
    .module('myApp', [
        'ui.bootstrap',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('examples', {
                url: "/examples",
                templateUrl: 'modules/my-app/views/examples.html',
                controller: 'examplesCtrl',
                controllerAs: 'vm'
            })
            .state('home', {
                url: "/home",
                templateUrl: 'modules/my-app/views/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .state('login', {
                url: "/login",
                templateUrl: 'modules/my-app/views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            });
    }]);
