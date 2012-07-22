define([
	"views/donut"
], function( Donut ){
	
	//this shop only has boxes that accommodate a dozen or 100 donuts
	var Box = Backbone.View.extend({
		
		initialize: function(){
			_.bindAll( this );
			this._donuts = this.options.donuts;
			this._donuts.bind( "reset", this.render );
			this.render();
		},
		
		constants: { "dozen": 12, "hundred": 100 },
		
		render: function(){
			this.$el.html( "" );
			var i;
			var donutView;
			i = 0;
			while( i<this._donuts.models.length ){
				donutView = new Donut( { model: this._donuts.models[i] } );// delete views after they are no longer in use?
				this.$el.append( donutView.el );
				i++;
			}
		}
		
	});
	
	return Box;
});