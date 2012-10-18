var App = App || {
	Routers: {},
	Models: {},
	Collections: {},
	Views: {}
};

$(function( $ ) {
	'use strict';

    App.Routers.AppRouter = Backbone.Router.extend({

        routes: {
            '': 'index'
        },

        initialize: function(options) {
        	// Define a global state
        	App.global = Backbone.Model.extend({});
        	App.globalState = new App.global;
        
        	// Load the first photo of a collection when a collection is loaded
        	App.photos = new App.Collections.Photos();
			App.photos.on("reset", function(collection, response){
				var photo = collection.first();
				App.router.changePhoto(photo);
			});
			
	    	App.photoDetailsView = new App.Views.Categories({});
        },

        index: function() {
        	// Set the default category to weddings-engagements
        	App.globalState.set('category', 'weddings-engagements');  
        },
        
        changePhoto: function(photo) {
			$('#showcase').fadeOut('fast', function(){
				$('#showcase').remove();
				$('#showcase').unbind();
				$('#menu').after('<div id="showcase" class="section"></div>');
				App.photoView = new App.Views.Photo({
			    	model: photo,
			    	collection: App.photos
		    	});
			});

			$('#details').fadeOut('fast', function(){
				$('#details').remove();
				$('#details').unbind();
				$('#showcase').after('<div id="details" class="section"></div>');
				App.photoDetailsView = new App.Views.PhotoDetails({
				    model: photo
			    });
			});
        },
        
        changeCollection: function(id) {
	        App.photos.url = 'assets/js/collections/photo-data-' + id + '.json';
	        App.photos.fetch();
        }
    });
});