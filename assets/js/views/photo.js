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
		
		initialize: function() {
			_.bindAll(this);
			this.name = 'Photo #' + this.model.get('title');
			this.render();
		},
		
		render: function() {
			var renderedContent = this.template(this.model);
			$(this.el).html(renderedContent);
			
			App.router.showView('#photo-content', this);
		},
		
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