/**
 * 
 */
var appModule =  angular.module("app");

appModule.filter('lengthFilter', function() {
	return function(input, length) {
		var output = [];
		for(var i in input) {
			if((input[i].length <= length) || (length == undefined)) {
				output.push(input[i]);
			}
		}
		
		return output;
	}
})