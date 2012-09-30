var App = App || {
	Routers: {},
	Models: {},
	Collections: {},
	Views: {}
};

$(function( $ ) {
	'use strict';

	App.Views.Photo = Backbone.View.extend({
		
		el: "#showcase",
		template: _.template($('#photo-showcase').html()),
		
		events: {
		},
		
		initialize: function() {
			_.bindAll(this);
			this.render();
		},
		
		render: function() {
			this.photo = App.photos.get(this.id);
			this.name = "photo " + this.id;
			
			var renderedContent = this.template(this.photo.attributes);
			$(this.el).html(renderedContent);
            $(this.el).css('display', 'none').fadeIn('slow');
            return this;
		}
	});
	
	App.Views.PhotoDetails = Backbone.View.extend({
		
		el: "#details",
		template: _.template($('#photo-details').html()),
		
		events: {
		},
		
		initialize: function() {
			_.bindAll(this);
			this.render();
		},
		
		render: function() {
			this.photo = App.photos.get(this.id);
			this.name = "photo details " + this.id;
			
			var renderedContent = this.template(this.photo.attributes);
			$(this.el).html(renderedContent);
			$(this.el).css('display', 'none').fadeIn('slow');
            return this;
		}
	});
});