define([
], function(){
	
	//this shop only has boxes that accommodate a dozen or 100 donuts
	var Box = Backbone.View.extend({
		
		initialize: function(){
			_.bindAll( this );
			this._donuts = this.options.donuts;
			this._donuts.bind( "reset", this.render );
			console.log( "box initialize this._donuts.models", this._donuts.models );
		},
		
		constants: { "dozen": 12, "hundred": 100 },
		
		render: function(){
			console.log( "render a box of donuts" );
			console.log( "box this._donuts.models", this._donuts.models );
			//if there are 12 or less, use the template for a dozen donuts
			//if there are more than 12, use the tmeplate for a hundred donuts
		},
		
		renderDozen: function(){
			
		},
		
		renderHundred: function(){
			
		},
		
		//this shop only has boxes that accommodate a dozen or 100 donuts
		setDonuts: function( donuts ){
			
		}
	});
	
	return Box;
});