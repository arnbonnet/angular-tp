/**
 * 
 */
var starwarsModule =  angular.module("starwars");

starwarsModule.controller('NamesListController', function($http, $scope, StarwarsService) {
	$scope.list = [];
	
	function loadPage(page) {
		return $http.get('https://swapi.co/api/people', {params:{page:page}}).then(function(response){
			for(var index in response.data.results) {
				var people = response.data.results[index];
				
				people.id = StarwarsService.calculateId(people);
				
				$scope.list.push(people);
			}
			
			if(response.data.next != null) {
				return loadPage(page+1);
			}
		});
		
	}
	
	loadPage(1);
	
	$scope.showPeople = function(people) {
		
	}
});
