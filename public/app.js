angular
  .module('movies', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name: 'home',
        url: '/',
        template: '<home></home>'
      })
      .state({
        name: 'about',
        url: '/about',
        template: '<h1>About</h1>'
      })

    $urlRouterProvider.otherwise('/')
  })
