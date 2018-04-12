var app = angular.module('arichandra', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', 
             function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
        cache:false,
    	url: '/login',
        templateUrl:'pages/login/login.html',
      	  controller: 'loginCtrl'
      })
    }]);