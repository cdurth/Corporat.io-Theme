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
      .state('services',{
        url: '/services',
        views: {
          'highlighted': { templateUrl: 'views/partial-services-highlighted.html' },
          'content': { templateUrl: 'views/partial-services.html' }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          'highlighted': { templateUrl: 'views/partial-about-highlighted.html' },
          'content': { templateUrl: 'views/partial-about.html' }
        }
      })
      .state('portfolio',{
        url: '/portfolio',
        views: {
          'highlighted': { templateUrl: 'views/partial-portfolio-highlighted.html' },
          'content': { templateUrl: 'views/partial-portfolio.html' }
        }
      });
      // .state('about',{
      //   url: '/about',
      //   views: {
      //     'highlighted': {templateUrl: 'views/partial-about.html' },
      //     'content': { templateUrl: 'views/partial-home.html' }
      //   }
      // })
});

