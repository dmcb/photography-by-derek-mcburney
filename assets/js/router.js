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

        currentView: null,

        routes: {
            '': 'home',
            'photo/:id': 'photo'
        },

        initialize: function(options) {
        },

        home: function(){
         	this.navigate('#/photo/marnie-and-jeff', {trigger: true});
        },

        photo: function(id){
        	// Grab all photos
        	App.photos = new App.Collections.Photos();
        	App.photos.fetch({
	        	success: function() {
			    	new App.Views.Photo({
				    	id: id
			    	});
			    	new App.Views.PhotoDetails({
				    	id: id
			    	});
	        	}
        	});
        },
    });
});