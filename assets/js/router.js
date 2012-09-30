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
        	// Grab all photos
        	App.photos = new App.Collections.Photos();
        	App.photos.fetch();
        },

        home: function(){
         	this.navigate('#/photo/marnie-and-jeff', {trigger: true});
        },

        photo: function(id){
	    	new App.Views.Photo({
		    	id: id
	    	});
        },

        // We have a common showView function that updates the
        // the current view, renders it and destroys the old one
        showView: function(selector, view) {
            if (this.currentView) this.currentView.destroy();
            $(selector).hide().html(view.el).fadeIn('slow');
            this.currentView = view;

            console.log('Rendered ' + view.name);

            return view;
        }
    });
});