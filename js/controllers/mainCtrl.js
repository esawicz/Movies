angular.module('movies').controller('mainCtrl', function($scope, mainService) {


$scope.getMovieData = function() {
  mainService.getMovieData().then(function(dataFromService){
    $scope.movieData = dataFromService;
  })
}




})
