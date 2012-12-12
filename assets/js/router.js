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
        		var photo = App.globalState.get('photo');
        		if (!photo) {
	        		photo = collection.first();
        		} 
				App.globalState.set('photo', null);
				App.router.changePhoto(photo);
			});

	    	// Add categories menu
	    	App.categoriesView = new App.Views.Categories();
        },

        index: function() {
        	// Once all photos are loaded, set the default category to weddings-engagements
        	App.photos.off("reset");
	        App.photos.on("reset", function(collection, response){
				App.globalState.set('category', 'weddings-engagements');
			});
			App.photos.fetch();
        },
        
        photo: function(id){
        	// Once all photos are loaded, grab the specific photo and switch to it's respective category of photos
        	App.photos.off("reset");
        	App.photos.on("reset", function(collection, response){
				var photo = App.photos.get(id);
				App.globalState.set('photo', photo);
				App.globalState.set('category', photo.attributes.category);
			});
			App.photos.fetch();
        },
        
        changeCollection: function(collection) {
	        App.currentPhotos.reset(App.photos.filter(function(photo) {
		        if (photo.attributes.category == collection) {
			        return true;
		        }
		        return false;
	        }));
        },
          
        changePhoto: function(photo) {
        	// Change URL
        	App.router.navigate(photo.attributes.id);
        	
        	// Update views
			App.photoView.changePhoto(photo);
			App.photoDetailsView.changePhoto(photo);
        },
        
        previousPhoto: function(photo) {
			var currentIndex = App.currentPhotos.indexOf(photo);
			var newIndex;
			if (currentIndex == 0) {
				newIndex = App.currentPhotos.length-1;
			} else {
				newIndex = currentIndex-1;
			}
			App.router.changePhoto(App.currentPhotos.at(newIndex));
        },
        
        nextPhoto: function(photo) {
			var currentIndex = App.currentPhotos.indexOf(photo);
			var newIndex;
			if (currentIndex == App.currentPhotos.length-1) {
				newIndex = 0;
			} else {
				newIndex = currentIndex+1;
			}
			App.router.changePhoto(App.currentPhotos.at(newIndex));  
        }
    });
});