/**
 * 
 */
var starwarsModule =  angular.module("starwars");

starwarsModule.controller('NamesListController',['$scope', 'StarwarsService', 'MemoryService', function($scope, StarwarsService, MemoryService) {
	$scope.list = [];
	$scope.filterText = MemoryService.get('searchPeople');
	$scope.dataLoading = true;
	
	StarwarsService.getAll().then(function(data) {
		$scope.list = data;
	}).finally(function () {
	    $scope.dataLoading = false;
	});
	
}]);
