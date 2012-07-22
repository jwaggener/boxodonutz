define([
	"text!resources/templates/donut.html"
], function( TemplateDonut ){
	
	var Donut = Backbone.View.extend({
		
		className: "left donut brightBlue",
		
		initialize: function(){
			_.bindAll( this );
			this._model = this.options.model;
			this.render();
		},
		
		render: function(){
			this.$el.append( _.template( TemplateDonut, { model: this._model } ) );
			this.$el.addClass( this.getBackgroundColor() );
		},
		
		getBackgroundColor: function(){
			var arr, r;
			arr = [ 
			'brightBlue', 'brightGreen', 'brightPurple', 'brightPink', 'brightYellowGreen',
			'afternoonSky',
			'citrom',
			'coralLips',
			'balloonBlue',
			'orangBalloon'
			 ];
			r = Math.round( ( Math.random() * arr.length ) );
			return arr[r];
		}
	});
	
	return Donut;
});