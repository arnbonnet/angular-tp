/**
 * 
 */
var starwarsModule =  angular.module("starwars");

starwarsModule.controller('PeopleController', function($scope, $routeParams, $http, $q, $timeout, StarwarsService) {

	StarwarsService.getOne($routeParams.id).then(function(data){
		$scope.people = data;
	});	
	
	///////// PROMISE TESTS ////////////
	var httpPromise = $http.get('https://swapi.co/api/people/' + $routeParams.id);
	
	console.log('avant');

	httpPromise.then(function() {
		console.log('response ok');
		return 1;
	}, function() {
		console.log('response ko');
		return 2;
	});
	
	httpPromise.then(function() {
		console.log('ok2');
	});
	httpPromise.then(undefined, function() {
		console.log('ko3');
	})
	
	console.log('après');
	///////////////////////////////////////
	
	///////// PROMISE CREATION TESTS //////////
//	function toto() {
//		var defer = $q.defer();
//		$timeout(function() {
//			if(Math.random()>0.5) {
//				defer.resolve({'hello':'world', 'hola':'que tal'});
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
//		console.log('OK', data.hello, data.hola);
//	},function(data) {
//		console.log('KO', data);
//	});
	/////////////////////////////////////////
	
});