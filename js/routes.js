angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.bahasa', {
    url: '/bahasa',
    views: {
      'tab1': {
        templateUrl: 'templates/bahasa.html',
        controller: 'bahasaCtrl'
      }
    }
  })

  .state('tabsController.gameTV', {
    url: '/gametv',
    views: {
      'tab2': {
        templateUrl: 'templates/gameTV.html',
        controller: 'gameTVCtrl'
      }
    }
  })

  .state('tabsController.wibuCorner', {
    url: '/wibucorner',
    views: {
      'tab3': {
        templateUrl: 'templates/wibuCorner.html',
        controller: 'wibuCornerCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/tabs/wibucorner')


});