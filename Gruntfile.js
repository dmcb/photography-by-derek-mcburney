module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bowerful: {
			store: 'assets/js/lib',
			packages: {
				"jquery": "",
				"jquery-placeholder": "",
				"backbone-amd": "",
				"underscore-amd": "",
				"modernizr": "",
				"respond": "",
				"bigscreen": ""
			}
		}
	});

	grunt.loadNpmTasks('grunt-bowerful');
	grunt.registerTask('default', 'bowerful');
};