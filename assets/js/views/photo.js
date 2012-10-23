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
			this.render();
		},
		
		render: function() {
			var renderedContent = this.template();
			$(this.el).html(renderedContent).animate({opacity: 0}, 0);
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
				$(that.el).children('img').css('background-image', 'url(assets/images/' + that.model.attributes.file + ')');
				$(that.el).children('img').css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="assets/images/' + that.model.attributes.file + '",sizingMethod="scale")');
				$(that.el).children('img').css('-ms-filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="assets/images/' + that.model.attributes.file + '",sizingMethod="scale")'); 
	            $(that.el).animate({opacity: 1}, 'slow');
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