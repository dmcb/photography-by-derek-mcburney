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
			"click .navigation#right": "nextPhoto",
			"click #focus": "fullScreen" 
		},
		
		initialize: function() {
			_.bindAll(this);
			this.render();
		},
		
		render: function() {
			var renderedContent = this.template();
			$(this.el).html(renderedContent).animate({opacity: 0}, 0);
		},
		
		previousPhoto: function() {
			App.router.previousPhoto(this.model);
		},
		
		nextPhoto: function() {
			App.router.nextPhoto(this.model);
		},
		
		fullScreen: function(event) {
			var target = event.currentTarget;
/*
			var fullscreenEnabled = document.fullScreenEnabled || document.mozScreenEnabled || document.webkitScreenEnabled;
			
			if (!fullscreenEnabled) {
				if (target.requestFullScreen) {
					target.requestFullScreen();
				}
				else if (target.mozRequestFullScreen) {
					target.mozRequestFullScreen();
				}
				else if (target.webkitRequestFullScreen) {
					target.webkitRequestFullScreen();
				}
			}
			else {			
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} 
				else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} 
				else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}
*/
			var target = $(event.currentTarget);
			if (BigScreen.enabled) {
				BigScreen.toggle(event.currentTarget);
			}
			else {
				// fallback for browsers that don't support full screen
			}
		},
		
		changePhoto: function(photo) {
			var that = this;
			$(this.el).animate({opacity: 0}, 'fast', function() {
				that.model = photo;
				$(that.el).children('#focus').children('img').css('background-image', 'url(assets/photos/' + that.model.attributes.file + ')');
				$(that.el).children('#focus').children('img').css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="assets/photos/' + that.model.attributes.file + '",sizingMethod="scale")');
				$(that.el).children('#focus').children('img').css('-ms-filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="assets/photos/' + that.model.attributes.file + '",sizingMethod="scale")'); 
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