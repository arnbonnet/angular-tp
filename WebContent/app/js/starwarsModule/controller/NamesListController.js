/**
 * 
 */
var starwarsModule =  angular.module("starwars");

starwarsModule.controller('NamesListController', function($scope, StarwarsService, MemoryService) {
	$scope.list = [];
	$scope.filterText = MemoryService.get('searchPeople');

	StarwarsService.getAll().then(function(data) {
		$scope.list = data;
	});
	
});
