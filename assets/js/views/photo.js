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
			"click .navigation": "swapPhoto",
			"click #focus": "fullScreen" 
		},
		
		initialize: function() {
			_.bindAll(this);
			this.render();
			
			App.globalState.on('change:photo', this.changePhoto); 
		},
		
		render: function() {
			var renderedContent = this.template();
			$(this.el).html(renderedContent).animate({opacity: 0}, 0);
		},
		
		swapPhoto: function(event) {
			event.preventDefault();
			var target = $(event.currentTarget);
			var currentIndex = App.currentPhotos.indexOf(this.model);
			var newIndex;
			if ($(target).attr('id') == "left") {
				newIndex = (currentIndex + App.currentPhotos.length - 1) % (App.currentPhotos.length);
			} else {
				newIndex = (currentIndex + 1) % (App.currentPhotos.length);
			}
			console.log(newIndex + " afsd " + (App.currentPhotos.length));
			App.globalState.set('photo', App.currentPhotos.at(newIndex));
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
				// Fallback for browsers that don't support full screen
			}
		},
		
		changePhoto: function() {
			var photo = App.globalState.get('photo');
			var that = this;
			$(this.el).animate({opacity: 0}, 'fast', function() {
				that.model = photo;
				$(that.el).children('#focus').children('img').css('background-image', 'url(' + that.model.attributes.file + ')');
				$(that.el).children('#focus').children('img').css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + that.model.attributes.file + '",sizingMethod="scale")');
				$(that.el).children('#focus').children('img').css('-ms-filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + that.model.attributes.file + '",sizingMethod="scale")'); 
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
			
			App.globalState.on('change:photo', this.changePhoto); 
		},
		
		render: function() {
			var renderedContent = this.template(this.model.attributes);
			$(this.el).html(renderedContent);
			$(this.el).animate({opacity: 1}, 'slow');
		},
		
		changePhoto: function() {
			var photo = App.globalState.get('photo');
			var that = this;
			
			// Change meta data
			document.title = photo.attributes.title + ' | Calgary Photography by Derek McBurney';
			
			$(this.el).animate({opacity: 0}, 'fast', function() {
				that.model = photo;
				that.render();
			});
		}
	});
});