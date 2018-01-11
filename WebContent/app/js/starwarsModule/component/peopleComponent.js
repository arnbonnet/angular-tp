/**
 * 
 */
var starwarsModule = angular.module("starwars");

starwarsModule.component('starwarsPeople', {
	templateUrl : './html/peopleCaracs.html',
		
	bindings: {
	    people: '=',
    	dataLoading: '=dataloading',
	},

});