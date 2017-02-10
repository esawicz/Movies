angular.module('movies').service('mainService', function($http, $q){
  this.getMovieData = function() {
    var deferred = $q.defer();
    $http({
      method: 'JSONP',
      url: //we need to find this
    }).then(function(response) {
      var filterData = response.data.results;
      var responseData = [];

      for (var i = 0; i < filterData.length; i++) {
        var obj = {
          //this is what i think we'll need. we'll need to look at obj we get
          Title: filterData[i].title,
          Genre: filterData[i].genre,
          Rating: filterData[i].rating

        }
        responseData.push(obj);
      }
    })
  }




})
