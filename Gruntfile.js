module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
      blog: {
        options: {
          sizes: [{
            suffix: '.tiny',
            quality: 90,
            rename: false,
            width: 36,
            height: 24
          },{
            suffix: '.mobile',
            quality: 90,
            rename: false,
            width: 356,
            height: 237
          },{
            suffix: '.mobile.2x',
            quality: 85,
            rename: false,
            width: 712,
            height: 475
          },{
            suffix: '.tablet',
            quality: 90,
            rename: false,
            width: 610,
            height: 407
          },{
            suffix: '.tablet.2x',
            quality: 85,
            rename: false,
            width: 1220,
            height: 813
          },{
            suffix: '.desktop',
            quality: 90,
            rename: false,
            width: 1250,
            height: 833,
          },{
            suffix: '.desktop.2x',
            quality: 85,
            rename: false,
            width: 2500,
            height: 1667
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'src/photos/blog/',
          dest: '_site/photos/blog/'
        }]
      },
      blogIndex: {
        options: {
          sizes: [{
            suffix: '.tiny',
            quality: 90,
            rename: false,
            width: 36,
            height: 36
          },{
            suffix: '.mobile',
            quality: 90,
            rename: false,
            width: 300,
            height: 300
          },{
            suffix: '.mobile.2x',
            quality: 85,
            rename: false,
            width: 600,
            height: 600
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'src/photos/blog-index/',
          dest: '_site/photos/blog-index/'
        }]
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['responsive_images']);
  grunt.registerTask('default', ['build']);
}
