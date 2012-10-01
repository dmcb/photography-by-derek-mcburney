var App = App || {
	Routers: {},
	Models: {},
	Collections: {},
	Views: {}
};

$(function( $ ) {
	'use strict';

    // ---------------
    App.Routers.AppRouter = Backbone.Router.extend({

        routes: {
            '': 'index'
        },

        initialize: function(options) {
        },

        index: function() {
        	// Grab all photos
        	App.photos = new App.Collections.Photos();
        	App.photos.fetch({
	        	success: function() {
	        		var photo = App.photos.first();
			    	new App.Views.Photo({
				    	model: photo,
				    	collection: App.photos
			    	});
			    	new App.Views.PhotoDetails({
				    	model: photo
			    	});
	        	}
        	});
        },
        
        changePhoto: function(index) {
	        console.log('Switching photo to ' + index);
	        App.Views.Photo.model = App.photos.at(index);
	        App.Views.PhotoDetails.model = App.photos.at(index);
        }
    });
});