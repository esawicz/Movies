function HomeController() {
  this.name = 'Mark'
}

angular
  .module('movies')
  .component('home', {
    templateUrl: 'public/containers/home/views/home.html',
    controller: HomeController
  })
