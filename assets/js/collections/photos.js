var App = App || {
	Routers: {},
	Models: {},
	Collections: {},
	Views: {}
};

$(function( $ ) {
	'use strict';

	App.Collections.Photos = Backbone.Collection.extend({
		model: App.Models.Photo
	});
});