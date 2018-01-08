/**
 * 
 */
var appModule =  angular.module("app");

appModule.controller('BodyController', function($scope) {
	
	$scope.$on('WRITE_ITEM', function(event, item) {
		$scope.yourName = item;
		console.log('body scope :', $scope);
	});
	
});
