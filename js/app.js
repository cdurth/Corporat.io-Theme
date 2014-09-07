var routerApp = angular.module('mainApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home'); // default state
    
    $stateProvider
      .state('home', {
          url: '/home',
          views: {
            'highlighted': { templateUrl: 'views/partial-home-highlighted.html' },
            'content': { templateUrl: 'views/partial-home.html' }
          }
      })
});

