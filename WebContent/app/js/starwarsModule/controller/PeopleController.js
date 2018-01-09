/**
 * 
 */
var starwarsModule =  angular.module("starwars");

starwarsModule.controller('PeopleController', function($scope, $routeParams, $http) {
	
	$scope.people = [];
	$http.get('https://swapi.co/api/people/' + $routeParams.id).then(function(response){
		$scope.people = response.data;
	});
	
});