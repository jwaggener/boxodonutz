define([
	'collections/donutsSelection',
	'collections/donuts',
	'views/index'
], function( DonutsSelection, Donuts, Index ){
		
	var Router = Backbone.Router.extend({

		routes: {
			'': 'index'
		},
		
		initialize: function( options ){
			_.bindAll( this );
			this._lang = options.lang;
			this._locale = options.locale;
			this._donutsSelection = new DonutsSelection( _mockDonuts() );
			this._donuts = new Donuts( );
		},
			
		index: function(){
			if( !this._indexPage ){
				this._indexPage = new Index( { donutsSelection: this._donutsSelection, donuts: this._donuts, lang: this._lang, locale: this._locale } );
			}
			$("#donutsApp").html( this._indexPage.el );
		}
			
	});
	
	var _mockDonuts = function(){
		var base = "/javascripts/apps/donuts/resources/images/"
		//yumminess level - 1-5, 5 is the most yummy
		return [
			{ id: 0, imgsrc: base + "001.png", yumminess: 5 },
			{ id: 1, imgsrc: base + "002.png", yumminess: 4 },
			{ id: 2, imgsrc: base + "003.png", yumminess: 2 },
			{ id: 3, imgsrc: base + "004.png", yumminess: 5 },
			{ id: 4, imgsrc: base + "005.png", yumminess: 4 },
			{ id: 5, imgsrc: base + "006.png", yumminess: 5 }
		];
	}
	
	var initialize = function( options ){
		var _router = new Router( options );
		Backbone.history.start();
	};
	
	return {
		initialize: initialize
	};
	
});
