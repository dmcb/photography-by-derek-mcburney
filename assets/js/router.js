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
        	
        	// Add photo views
			App.photoView = new App.Views.Photo();
			App.photoDetailsView = new App.Views.PhotoDetails();
        
        	// Load the first photo of a collection when a collection is loaded
        	App.photos = new App.Collections.Photos();
			App.photos.on("reset", function(collection, response){
				App.router.changePhoto(collection.first());
			});

	    	// Add categories menu
	    	App.categoriesView = new App.Views.Categories();
        },

        index: function() {
        	// Set the default category to weddings-engagements
        	App.globalState.set('category', 'weddings-engagements');  
        },
        
        changeCollection: function(id) {
	        App.photos.url = 'assets/js/collections/photo-data-' + id + '.json';
	        App.photos.fetch();
        },
          
        changePhoto: function(photo) {
			App.photoView.changePhoto(photo);
			App.photoDetailsView.changePhoto(photo);
        },
        
        previousPhoto: function(photo) {
			var currentIndex = App.photos.indexOf(photo);
			var newIndex;
			if (currentIndex == 0) {
				newIndex = App.photos.length-1;
			} else {
				newIndex = currentIndex-1;
			}
			App.router.changePhoto(App.photos.at(newIndex));
        },
        
        nextPhoto: function(photo) {
			var currentIndex = App.photos.indexOf(photo);
			var newIndex;
			if (currentIndex == App.photos.length-1) {
				newIndex = 0;
			} else {
				newIndex = currentIndex+1;
			}
			App.router.changePhoto(App.photos.at(newIndex));  
        }
    });
});