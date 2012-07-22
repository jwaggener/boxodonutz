/*donuts presented*/
define([
	], function( Donut ){
		
		var Donuts = Backbone.Collection.extend({
			
			model: Donut
			
		});
		
		return Donuts;
	}
);