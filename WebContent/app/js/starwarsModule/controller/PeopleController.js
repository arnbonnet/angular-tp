/**
 * 
 */
var starwarsModule =  angular.module("starwars");

starwarsModule.controller('PeopleController',['$scope', '$routeParams', '$http', '$q', '$timeout', 'StarwarsService', function($scope, $routeParams, $http, $q, $timeout, StarwarsService) {
	$scope.dataLoading = true;
	
	StarwarsService.getOne($routeParams.id).then(function(data){
		$scope.people = data;
	}).finally(function () {
		$scope.dataLoading = false;
	});
	
	///////// PROMISE TESTS ////////////
//	var httpPromise = $http.get('https://swapi.co/api/people/' + $routeParams.id);
//	
//	console.log('avant');
//
//	httpPromise.then(function() {
//		console.log('response ok');
//		return 1;
//	}, function() {
//		console.log('response ko');
//		return 2;
//	});
//	
//	httpPromise.then(function() {
//		console.log('ok2');
//	});
//	httpPromise.then(undefined, function() {
//		console.log('ko3');
//	})
//	
//	console.log('après');
	///////////////////////////////////////
	
	///////// PROMISE CREATION TESTS //////////
//	function toto() {
//		var defer = $q.defer();
//		$timeout(function() {
//			if(Math.random()>0.5) {
//				defer.resolve({h:'hello', w:'world'});
//			} else {
//				defer.reject('Arg');
//			}
//		}, Math.random()*1000);
//		return defer.promise;
//	}
//	
//	var randomPromise = toto();
//	
//	randomPromise.then(function(data) {
//		console.log('OK', data.h, data.w);
//	},function(data) {
//		console.log('KO', data);
//	});
	/////////////////////////////////////////
	
}]);