/**
 * 
 */
var starwarsModule = angular.module("starwars");

starwarsModule.factory('StarwarsService',['$http','$q', function($http, $q) {
	
	/* Récupère l'id d'un personnage à partir de son url dans l'api
	 */
	var calculateIdLogic = function(people) {
		var url = people.url;
		
		url = url.substring(0, url.length - 1);
		var id = url.substring(url.lastIndexOf('/') + 1);

		return parseInt(id);
		
	};
	
	var defer = $q.defer();
	var p1 = $http.get('https://swapi.co/api/people', {params:{page:1}});
	var p2 = p1.then(function(response){
		var count = response.data.count;
		var nbPages = Math.ceil(count/10);
		
		var list = response.data.results.map(function(people) {
			people.id = calculateIdLogic(people);
			return people;
		});
		var promisesPages = [];
	
		for(var page = 2; page<=nbPages; page++) {
			promisesPages.push($http.get('https://swapi.co/api/people', {params:{page:page}}).then(function(response) {
				for(var result of response.data.results) {
					result.id = calculateIdLogic(result);
					list.push(result);
				}
			}));
		}
		
		return $q.all(promisesPages).then(function() {
			var listWithIds = list.sort(function(x,y) {
				return x.id - y.id;
			});
			
			return defer.resolve(listWithIds);
		});
		
	});

	var getAllLogic = function() {
		return defer.promise;
	};
	
	var peoplePromises = {};
	var getOneLogic = function(id) {
		if(!peoplePromises[id]) {
			peoplePromises[id] = $http.get('https://swapi.co/api/people/' + id);			
		}
		var p1 = peoplePromises[id];
		var p2 = p1.then(function(response){
			return response.data;
		});
		return p2;
	};
	
	return {
		calculateId : calculateIdLogic,
		getAll : getAllLogic,
		getOne : getOneLogic
	};
}]);