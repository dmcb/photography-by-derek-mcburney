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
		},
		
		initialize: function() {
			_.bindAll(this);
			this.model.on('change', this.render);
			this.render();
		},
		
		render: function() {
			var renderedContent = this.template(this.model.attributes);
			$(this.el).html(renderedContent);
            $(this.el).css('display', 'none').fadeIn('slow');
            return this;
		},
		
		previousPhoto: function(e) {
			var currentIndex = this.collection.indexOf(this.model);
			var newIndex;
			if (currentIndex == 0) {
				newIndex = this.collection.length-1;
			} else {
				newIndex = currentIndex-1;
			}
			App.router.changePhoto(newIndex);
		},
		
		nextPhoto: function(e) {
			var currentIndex = this.collection.indexOf(this.model);
			var newIndex;
			if (currentIndex == this.collection.length-1) {
				newIndex = 0;
			} else {
				newIndex = currentIndex+1;
			}
			App.router.changePhoto(newIndex);
		}
	});
	
	App.Views.PhotoDetails = Backbone.View.extend({
		
		el: "#details",
		template: _.template($('#photo-details').html()),
		
		events: {
		},
		
		initialize: function() {
			_.bindAll(this);
			this.model.on('change', this.render);
			this.render();
		},
		
		render: function() {
			var renderedContent = this.template(this.model.attributes);
			$(this.el).html(renderedContent);
			$(this.el).css('display', 'none').fadeIn('slow');
            return this;
		}
	});
});