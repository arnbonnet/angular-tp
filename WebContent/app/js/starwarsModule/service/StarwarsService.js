/**
 * 
 */
var starwarsModule =  angular.module("starwars");

starwarsModule.value('StarwarsService', {
	calculateId : function(people) {
		var url = people.url;
		url = url.substring(0, url.length-1);
		var id = url.substring(url.lastIndexOf('/')+1);
		
		return parseInt(id);
	}
});