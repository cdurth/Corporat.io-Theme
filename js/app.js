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
          'content': { templateUrl: 'views/partial-about.html' },
          'sidebar@about': { templateUrl: 'views/partial-about-sidebar.html' }
        }
      })
      .state('about_member', {
        url: '/about_member',
        views: {
          'highlighted': { templateUrl: 'views/partial-about-member-highlighted.html' },
          'content': { templateUrl: 'views/partial-about-member.html' },
          'sidebar@about_member': { templateUrl: 'views/partial-about-sidebar.html' }
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

