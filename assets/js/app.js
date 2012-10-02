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
	
	$('#name, #email, #story').bind('input', function(event) { 
		var target = event.target.id;
		var data = {};
		data[target] = $('#' + target).val();
		$.ajax({
			type: 'POST',
			url: "assets/php/emailer.php",
			data: data,
			dataType: 'json',
			success: function(response) {
				if (response[target]) {
					$("#" + target).addClass("error");
					$("#" + target + "_error").html(response[target]).css('display', 'block');
				} else if (!response[target]) {
					$("#" + target + "_error").css('display', 'none');
					$("#" + target).removeClass("error");
				}
			}
		});
	});
	
	$("#contactme").submit(function() {
		//$("#load").show();
		$('#send').hide();
		$.ajax({
			type: 'POST',
			url: "assets/php/emailer.php",
			data: { 
				name: $('#name').val(),
				email: $('#email').val(),
				story: $('#story').val()
			},
			dataType: 'json',
			success: function(response) {
				//$('#load').hide();
				if (!response) {
					$("#contactme").html("<span class=\"error\">Thank you very much for your interest! I'll respond to you as soon as I can.</span>");
				}
				else if (response.error) {
					$("#contactme").html("<span class=\"error\">" + response.error + "</span>");
				} else {
					$("#send").show();
					
					var fields = ['name', 'email', 'story'];
					for (var i=0; i < fields.length; i++) {
						if (response[fields[i]]) {
							$("#" + fields[i]).addClass("error");
							$("#" + fields[i] + "_error").html(response[fields[i]]).css('display', 'block');
						} else {
							$("#" + fields[i] + "_error").css('display', 'none');
							$("#" + fields[i]).removeClass("error");
						}
					}
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				$("#send").show();
				//$('#load').hide();
				alert(xhr.status);
				alert(thrownError);
				alert('Email submission failed, please try again.');
			}
		});
		return false;
	});
});