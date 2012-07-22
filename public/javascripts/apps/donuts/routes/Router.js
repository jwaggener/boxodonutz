define([
	'views/index'
], function( Index ){
		
	var Router = Backbone.Router.extend({

		routes: {
			'': 'index'
		},
			
		index: function(){
			if( !this.indexPage ){
				this.indexPage = new Index( {} );
			}
			$("#donutsApp").html( this.indexPage.el );
		}
			
	});
	
	var initialize = function( options ){
		var router = new Router();
		Backbone.history.start();
	};
	
	return {
		initialize: initialize
	};
	
});
