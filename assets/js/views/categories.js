var App = App || {
	Routers: {},
	Models: {},
	Collections: {},
	Views: {}
};

$(function( $ ) {
	'use strict';

	App.Views.Categories = Backbone.View.extend({
		
		el: "#menu",
		template: _.template($('#photo-categories').html()),
		
		events: {

		},
		
		initialize: function() {
			_.bindAll(this);
			this.render();
		},
		
		render: function() {
			var renderedContent = this.template();
			$(this.el).html(renderedContent);
            $(this.el).css('display', 'none').fadeIn('slow');
            return this;
		},
	});
});