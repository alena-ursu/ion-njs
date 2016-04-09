// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('client', [
  'ionic',
  'ngCordova',
  'client.services',
  'client.controllers',

  'add',
  'home'
])

.config(function($stateProvider, $provide, $urlRouterProvider, $httpProvider) {

  $provide.decorator('$state', function($delegate, $stateParams) {
    $delegate.forceReload = function() {
      return $delegate.go($delegate.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });
    };
    return $delegate;
  });

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    views: {
      home: {
        templateUrl: 'rims/home/home.view.html',
        controller: 'HomeController',
        resolve: {
          CarsResource: function(LinkService){
            return LinkService.getCars()
          }
        }
      }
    }
  })
  .state('add', {
    url: '/add',
    views: {
      add: {
        templateUrl: 'rims/add/add.view.html',
        controller: 'AddController'
      }
    }
  })
  .state('search', {
    url: '/search',
    views: {
      search: {
        templateUrl: 'rims/search/search.view.html',
        controller: 'SearchController'
      }
    }
  })
  .state('profile', {
    url: '/profile',
    views: {
      profile: {
        templateUrl: 'rims/profile/profile.view.html'
      }
    }
  })
  .state('settings', {
    url: '/settings',
    views: {
      settings: {
        templateUrl: 'rims/settings/settings.view.html'
      }
    }
  });
})

.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
})

.run(function($ionicPlatform, $cordovaStatusbar) {

  if(window.StatusBar) {
    StatusBar.overlaysWebView(true);
    //StatusBar.style(2) //Black, transulcent
    //StatusBar.style(3) //Black, opaque

    $cordovaStatusbar.styleColor('black');
    //$cordovaStatusbar.styleHex('#000'); //red
  }


  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
