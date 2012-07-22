define( [], function(){
	var lang = (function(){
	    //private
	    var _lang = [];
		var _defaultLanguage = "en_us";
		return {
			addLanguage: function( hash ){ //{ "en_us": { createPostTitle: "Create a Post", etc } }
				for (var locale in hash) {
					_lang[ locale ] = hash[ locale ];
				}
			},
			getText:function( itemid, langid ){
				console.log( "getText");
				var language = langid || _defaultLanguage;
				if( !_lang[ language ] ){ return "hfkhasdkjf" };//simple error checking. returning null if the objects are not present.
				if( !_lang[ language ][ itemid ] ){ return "" };
				return _lang[ language ][ itemid ];
			}
		};
	})();
	return lang;
});