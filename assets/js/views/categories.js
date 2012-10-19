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
			"click li": "selectCategoryLink",
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
			$('li').removeClass('active');
			$('#'+category).addClass('active');
			$("select option").filter(function() {
				return $(this).val() == category; 
			}).attr('selected', true);
			App.router.changeCollection(category);
		},
		
		selectCategoryLink: function(event) {
			var target = $(event.currentTarget);
			App.globalState.set('category', $(target).attr('id'));
		},
		
		selectCategoryDropdown: function(event) {
			var target = $(event.currentTarget);
			App.globalState.set('category', $(target).val());
		}
	});
});