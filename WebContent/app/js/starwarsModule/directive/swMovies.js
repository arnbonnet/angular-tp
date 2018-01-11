/**
 * 
 */
var starwarsModule = angular.module("starwars");

starwarsModule.directive('swMovies', function() {
	return function(scope, element, attrs) {

		scope.$watch(attrs.swMovies, function(people) {
			element.find('span').remove();
			if(people!==undefined) {
				for(var i=0; i<people.films.length; i++) {
					element.append('<span class="fa fa-ticket fa-2x"></span>');
				}				
			}
			
		})
		
	};
});