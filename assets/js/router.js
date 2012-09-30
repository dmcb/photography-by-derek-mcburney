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
        app: null,

        routes: {
            '': 'home',
            'photo/:id': 'photo'
        },

        initialize: function(options) {
        },

        home: function(){
          this.navigate('#/photos/marnie-and-jeff', {trigger: true});
        },

        photo: function(id){
			var view = new App.Views.Photo(id);
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