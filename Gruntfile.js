module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			my_target : {
				files : {
					'_/js/script.js' : ['_/komponen/js/*.js']
				} // files
			} // my_target
		}, // uglify
		compass : {
			dev : {
				options : {
					config : 'config.rb'
				} // options
			} // dev
		}, // compass
		watch : {
			options: { livereload : true },
			scripts : {
				files : ['_/komponen/js/*.js'],
				tasks : ['uglify']
			}, // scripts
			sass : {
				files : ['_/komponen/sass/*.scss', '_/komponen/sass/pengaturan/*.scss', '_/komponen/sass/pola-dasar/*.scss', '_/komponen/sass/pola-lanjutan/*.scss'],
				tasks : ['compass:dev']
			}, // sass
			html : {
				files : ['*.html']
			} // html
		} // watch
	});

	// Load the plugin that provides tasks.
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', 'watch');
}; //export