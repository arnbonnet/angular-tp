/**
 * 
 */
var appModule =  angular.module("app");

appModule.controller('ListController', function($scope) {
	$scope.list = ['Oui,', 'Non,','Stop,','Laisses-moi,', 'Tu sais quoi ?', 'Eh !'];
	
	$scope.writeItem = function(item) {
		$scope.$emit('WRITE_ITEM', item);
		console.log('list scope :', $scope);
	};
	
	$scope.number = 50;
	$scope.getNumber = function(num) {
	    return new Array(num);   
	}
});
