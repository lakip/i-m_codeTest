angular.module('starsWars', [])
  .controller('charactersController', ['$scope','$http', function($scope,$http) {

    $scope.char = [

    ];

    $scope.addCharacter = function(name) {
      console.log(name);
      $scope.char.push({text:name, done: false});
    }
    $http.get("https://swapi.co/api/people/").then(function(response){
  			$scope.myCharacters = response.data;
  	});

    $scope.deleteCharacter = function(item) {
      $scope.char.splice(item, 1);

    }

    $scope.countDone = function() {
      var count = 0;
      angular.forEach($scope.char, function(t) {
        count += t.done ? 0 : 1;
      })
      return count;
    }

  }]);
