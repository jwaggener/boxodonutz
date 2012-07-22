define([
	'text!resources/templates/index.html'
], function( Template ){
	
	var Index = Backbone.View.extend({
		
		initialize: function(){
			console.log( "Index" );
			_.bindAll( this );
			this.render();
		},
		
		render: function(){
			$(this.el).append( _.template( Template ) );
		}
		
	});
	
	return Index;
});