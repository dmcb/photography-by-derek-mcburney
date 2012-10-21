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
			"click .navigation#left": "previousPhoto",
			"click .navigation#right": "nextPhoto"
		},
		
		initialize: function() {
			_.bindAll(this);
		},
		
		render: function() {
			var renderedContent = this.template(this.model.attributes);
			$(this.el).html(renderedContent);
            $(this.el).animate({opacity: 1}, 'slow');
		},
		
		previousPhoto: function(e) {
			App.router.previousPhoto(this.model);
		},
		
		nextPhoto: function(e) {
			App.router.nextPhoto(this.model);
		},
		
		changePhoto: function(photo) {
			var that = this;
			$(this.el).animate({opacity: 0}, 'fast', function() {
				that.model = photo;
				that.render();
			});
		}
	});
	
	App.Views.PhotoDetails = Backbone.View.extend({
		
		el: "#details",
		template: _.template($('#photo-details').html()),
		
		events: {
		},
		
		initialize: function() {
			_.bindAll(this);
		},
		
		render: function() {
			var renderedContent = this.template(this.model.attributes);
			$(this.el).html(renderedContent);
			$(this.el).animate({opacity: 1}, 'slow');
		},
		
		changePhoto: function(photo) {
			var that = this;
			$(this.el).animate({opacity: 0}, 'fast', function() {
				that.model = photo;
				that.render();
			});
		}
	});
});