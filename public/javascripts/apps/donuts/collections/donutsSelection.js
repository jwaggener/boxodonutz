/*donuts available*/
define([
	'models/donut'
	], function( Donut ){
		
		var DonutsSelection = Backbone.Collection.extend({
			
			model: Donut,
			
			/*retrive a variety of donuts*/
			getDonuts: function( numDonuts ){
				var clonedModels, clonedModel, newModel, donuts;
				var idSave;
				var i, j, l, r;
				donuts = [];
				
				clone = this.models.slice( 0 );
				i = numDonuts;
				while ( i > 0 ){
					clonedModels = this.models.slice( 0 );
					j = clonedModels.length - 1;
					while ( j >= 0 ){
						r = Math.round( Math.random() * j );
						j--;
						clonedModel = ( clonedModels.splice( r, 1 )[0] ).clone();
						idSave = clonedModel.get("id");
						clonedModel.unset( "id" );
						clonedModel.set( { "type": idSave } );//save the reference to the DonutsSeletion id
						newModel = new Donut( clonedModel.attributes )
						if( i > 0 ){ donuts.push( newModel ); } else{ break; };
						i--;
					}
				}
				return donuts;
			}
			
		});
		
		return DonutsSelection;
	}
);