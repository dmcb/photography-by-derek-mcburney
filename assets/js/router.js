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
            '': 'index',
            ':id': 'photo'
        },

        initialize: function(options) {
        	// Define a global state
        	App.global = Backbone.Model.extend({});
        	App.globalState = new App.global;
        	
        	// Add photo views
			App.photoView = new App.Views.Photo();
			App.photoDetailsView = new App.Views.PhotoDetails();
        
        	// Define collection of all photos
        	App.photos = new App.Collections.Photos();
        	App.photos.url = 'assets/js/collections/photo-data.json';
        	
        	// Define collection of currently selected category photos
        	App.currentPhotos = new App.Collections.Photos();
        	App.currentPhotos.on("reset", function(collection, response){
        		// If a specific photo in the collection is to be loaded, grab it, otherwise use first in collection
        		var category = App.globalState.get('category');
        		if (category.photo) {
        			App.globalState.set('photo', category.photo);
        			App.globalState.set('category', {category:category.category}, {silent: true});
        		}
        		else {
	        		App.globalState.set('photo', collection.first());
        		}
			});

	    	// Add categories menu
	    	App.categoriesView = new App.Views.Categories();
	    	
	    	// Update routing on photo change
	    	App.globalState.on('change:photo', this.changePhoto); 
	    	
	    	// Update collection on category change
	    	App.globalState.on('change:category', this.changeCategory); 
        },

        index: function() {
        	// Once all photos are loaded, set the default category to weddings-engagements
        	App.photos.off("reset");
	        App.photos.on("reset", function(collection, response){
				App.globalState.set('category', {category:'weddings-engagements'});
			});
			App.photos.fetch();
        },
        
        photo: function(id){
        	// Once all photos are loaded, grab the specific photo and switch to it's respective category of photos
        	App.photos.off("reset");
        	App.photos.on("reset", function(collection, response){
				var photo = App.photos.get(id);
				App.globalState.set('category', {category:photo.attributes.category, photo:photo});
			});
			App.photos.fetch();
        },
        
        changeCategory: function() {
        	var category = App.globalState.get('category');
	        App.currentPhotos.reset(App.photos.filter(function(photo) {
		        if (photo.attributes.category == category.category) {
			        return true;
		        }
		        return false;
	        }));
        },
          
        changePhoto: function() {
        	// Change URL
        	var photo = App.globalState.get('photo');
        	App.router.navigate(photo.attributes.id);
        }
    });
});