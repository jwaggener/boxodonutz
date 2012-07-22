define([
	'lang',//a singleton that handles locales
	'resources/copy-en-us',//the copy for en-us
	'routes/Router'
	], 
	function( Lang, EN_US, Router ){
		
		var Donutz = {
			
			init: function( options ){
				Lang.addLanguage( EN_US );//copy
				Router.initialize( { lang: Lang, locale: "en_us" } );
			}
		}
		
		return Donutz;
	}
);