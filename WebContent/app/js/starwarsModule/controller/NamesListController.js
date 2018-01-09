/**
 * 
 */
var starwarsModule =  angular.module("starwars");

starwarsModule.controller('NamesListController', function($http, $scope) {
	$scope.list = [];
	function loadPage(page) {
		return $http.get('https://swapi.co/api/people', {params:{page:page}}).then(function(response){
			for(var index in response.data.results) {
				var people = response.data.results[index];
				
				var url = people.url;
				url = url.substring(0, url.length-1);
				
				var id = url.substring(url.lastIndexOf('/')+1);
				people.id = parseInt(id);
				
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
