var App = App || {
	Routers: {},
	Models: {},
	Collections: {},
	Views: {}
};

$(function( $ ) {
	'use strict';

	App.Views.Photo = Backbone.View.extend({

		tagName: 'div',
		
		template: _.template($('#photo-template').html()),
		
		events: {
		},
		
		initialize: function(id) {
			// Get photo from collection
			this.model = new App.Models.Photo(id);

			_.bindAll(this);
			this.model.on('change', this.render);
			this.model.fetch();
		},
		
		render: function() {
			var renderedContent = this.template(this.model);
			$(this.el).html(renderedContent);
			
			App.router.showView('#photo-content', this);
		},
		
		// Remove this view from the DOM, remove the view, and remove
		// any event listeners in order to clean up any possible memory leaks.
		destroy: function() {
			var that = this;
			
			$(this.el).fadeOut('slow', function(){
			$(that.el).remove();
			that.remove();
			that.unbind();
			});
		}
	});
});