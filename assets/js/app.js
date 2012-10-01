var App = App || {
	Routers: {},
	Models: {},
	Collections: {},
	Views: {}
};

$(function() {
	App.router = new App.Routers.AppRouter();
	Backbone.history.start();
	
	$('input, textarea').placeholder();
	
	$("#contactme").submit(function() {
		alert('Validation placeholder');
	});
});