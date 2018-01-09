/**
 * 
 */
angular.module("starwars",['ngRoute'])
.config(function($routeProvider) {
	
		$routeProvider.when('/people', {
		    templateUrl: './html/peopleList.html',
		    controller: 'NamesListController'
		})
		.when('/people/:id', {
		    templateUrl: './html/people.html',
		    controller: 'PeopleController'
		})
		.otherwise({
			redirectTo : '/people'
		});
	}
);