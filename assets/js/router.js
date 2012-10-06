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
        	// Grab all photos
        	App.photos = new App.Collections.Photos();
			App.photos.on("reset", function(collection, response){
				var photo = collection.first();
				App.router.loadPhoto(collection, photo);
				App.router.loadPhotoDetails(photo);
			});
			App.photos.fetch();
        },

        index: function() {
        	
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
        
        changePhoto: function(index) {
			
			var photo = App.photos.at(index);
			
			$('#showcase').fadeOut('fast', function(){
				$('#showcase').remove();
				$('#showcase').unbind();
				$('h1').after('<div id="showcase" class="section"></div>');
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