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
            '': 'index',
            'photo/:id': 'photo'
        },

        initialize: function(options) {
        	// Define a global state
        	App.global = Backbone.Model.extend({});
        	App.globalState = new App.global;
        
        	// Grab all photos
        	App.photos = new App.Collections.Photos();
			App.photos.on("reset", function(collection, response){
				var photo = collection.first();
				App.router.loadPhoto(collection, photo);
				App.router.loadPhotoDetails(photo);
			});
			App.photos.fetch();
			
	    	App.photoDetailsView = new App.Views.Categories({});
        },

        index: function() {
        	
        },
        
        photo: function(id) {
	        
        },
        
        loadPhoto: function(collection, photo) {
			App.photoView = new App.Views.Photo({
		    	model: photo,
		    	collection: collection
	    	});
	    },
	    
	    loadPhotoDetails: function(photo) {
	    	App.photoDetailsView = new App.Views.PhotoDetails({
			    model: photo
		    });
        },
        
        changePhoto: function(photo) {
			
			$('#showcase').fadeOut('fast', function(){
				$('#showcase').remove();
				$('#showcase').unbind();
				$('#menu').after('<div id="showcase" class="section"></div>');
				App.router.loadPhoto(App.photos, photo);
			});

			$('#details').fadeOut('fast', function(){
				$('#details').remove();
				$('#details').unbind();
				$('#showcase').after('<div id="details" class="section"></div>');
				App.router.loadPhotoDetails(photo);
			});
        }
    });
});