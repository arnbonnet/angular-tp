/**
 * 
 */
var starwarsModule = angular.module("starwars");

starwarsModule.service('MemoryService', [function() {
	var memory = [];
	
	this.get = function(key) {
			if(!memory[key]) {
				memory[key] = {};
			}
			return memory[key];
	};
}]);