define([
	'views/box',
	'text!resources/templates/index.html'
], function( Box, Template ){
	
	var Index = Backbone.View.extend({
		
		events:{
			"change input[@name='quantity']": "handleInputChange"
		},
		
		initialize: function(){
			console.log( "Index" );
			_.bindAll( this );
			this._lang = this.options.lang;
			this._locale = this.options.locale;
			this._donutsSelection = this.options.donutsSelection;// the kinds of donuts
			this._donuts = this.options.donuts;// a particular collection of donuts
			this._numDonuts;//either 12 or 100
			this._box = new Box( { donuts: this._donuts } );
			this.render();
		},
		
		render: function(){
			$(this.el).append( this._box.el );
			$(this.el).append( _.template( Template, { lang: this._lang, locale: this._locale } ) );
		},
		
		handleInputChange: function( e ){
			console.log("handleInputChange");
			var val;
			val = $("input[@name='quantity']:checked").val();
			this._numDonuts = this._box.constants[val];
			//get the donuts from the collection and have the box render them
			var newDonuts = this._donutsSelection.getDonuts( this._numDonuts );
			console.log( "newDonuts", newDonuts );
			this._donuts.reset( newDonuts, {unique : false} );
		},
		
		getDonuts: function(){
			
		}
		
	});
	
	return Index;
});