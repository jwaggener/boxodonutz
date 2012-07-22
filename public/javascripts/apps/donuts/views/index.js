define([
	'views/box',
	'text!resources/templates/index.html'
], function( Box, Template ){
	
	var Index = Backbone.View.extend({
		
		className: "index center",
		
		events:{
			"change input[@name='quantity']": "handleInputChange"
		},
		
		initialize: function(){
			_.bindAll( this );
			this._lang = this.options.lang;
			this._locale = this.options.locale;
			this._donutsSelection = this.options.donutsSelection;// the kinds of donuts
			this._donuts = this.options.donuts;// a particular collection of donuts
			this._numDonuts = 12;//either 12 or 100
			this._donuts.reset( this._donutsSelection.getDonuts( this._numDonuts ) );
			this._box = new Box( { donuts: this._donuts } );
			this.render();
		},
		
		render: function(){
			this.$el.append( _.template( Template, { lang: this._lang, locale: this._locale } ) );
			this.$el.append( this._box.el );
			$("change input[@name='quantity']:nth(0)").attr( 'checked', 'true' );
		},
		
		handleInputChange: function( e ){
			var val;
			val = $("input[@name='quantity']:checked").val();
			this._numDonuts = this._box.constants[val];
			//get the donuts from the collection and have the box render them
			var newDonuts = this._donutsSelection.getDonuts( this._numDonuts );
			this._donuts.reset( newDonuts );
		}
		
	});
	
	return Index;
});