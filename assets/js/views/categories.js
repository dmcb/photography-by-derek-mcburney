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
			"click li": "selectCategory"
		},
		
		initialize: function() {
			_.bindAll(this);
			this.render();
			
			App.globalState.on('change:category', this.changeCategory); 
		},
		
		render: function() {
			var renderedContent = this.template();
			$(this.el).html(renderedContent);
            $(this.el).css('display', 'none').fadeIn('slow');
            return this;
		},
		
		changeCategory: function() {
			var category = App.globalState.get('category');
			$('#'+category).addClass('active');
			App.router.changeCollection(category);
		},
		
		selectCategory: function(event) {
			var target = $(event.currentTarget);
			$('li').removeClass('active');
			App.globalState.set('category', $(target).attr('id'));
		}
	});
});