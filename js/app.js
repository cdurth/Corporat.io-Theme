var routerApp = angular.module('mainApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.otherwise('/home');
    
    // $stateProvider
        
    //     // HOME STATES AND NESTED VIEWS ========================================
    //     .state('home', {
    //         url: '/home',
    //         templateUrl: 'views/partial-home.html'
    //     })
        
    //     // nested list with custom controller
    //     .state('home.list', {
    //         url: '/list',
    //         templateUrl: 'views/partial-home-list.html',
    //         controller: function($scope) {
    //             $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    //         }
    //     })
        
    //     // nested list with just some random string data
    //     .state('home.paragraph', {
    //         url: '/paragraph',
    //         template: 'I could sure use a drink right now.'
    //     })
        
    //     // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    //     .state('about', {
    //         url: '/about',
    //         views: {
    //             '': { templateUrl: 'views/partial-about.html' },
    //             'columnOne@about': { template: 'Look I am a column!' },
    //             'columnTwo@about': { 
    //                 templateUrl: 'views/table-data.html',
    //                 controller: 'scotchController'
    //             }
    //         }
    //     });
        
});

