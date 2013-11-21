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
			"click a": "selectCategoryLink",
			"change select": "selectCategoryDropdown"
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
			if (category.category == "blog") {
				window.location.assign('blog');
			}
			else {
				$('li a').removeClass('active');
				$('#'+category.category).addClass('active');
				$("select option").filter(function() {
					return $(this).val() == category.category; 
				}).attr('selected', true);
			}
		},
		
		selectCategoryLink: function(event) {
			var target = $(event.currentTarget);
			event.preventDefault();
			App.globalState.set('category', {category:$(target).attr('id')});
		},
		
		selectCategoryDropdown: function(event) {
			var target = $(event.currentTarget);
			App.globalState.set('category', {category:$(target).val()});
		}
	});
});