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
			App.photos.bind('reset', this.render);
		},
		
		render: function() {
			var photo = App.photos.get(this.id);
			var renderedContent = this.template(photo.attributes);
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