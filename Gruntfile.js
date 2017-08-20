module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
      blog: {
        options: {
          sizes: [{
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
      },
      portfolio: {
        options: {
          sizes: [{
            suffix: '.mobile',
            quality: 90,
            rename: false,
            width: 365,
            height: 243
          },{
            suffix: '.mobile.2x',
            quality: 85,
            rename: false,
            width: 730,
            height: 486
          },{
            suffix: '.tablet',
            quality: 90,
            rename: false,
            width: 719,
            height: 479
          },{
            suffix: '.tablet.2x',
            quality: 85,
            rename: false,
            width: 1438,
            height: 958
          },{
            suffix: '.desktop',
            quality: 90,
            rename: false,
            width: 946,
            height: 631,
          },{
            suffix: '.desktop.2x',
            quality: 85,
            rename: false,
            width: 1892,
            height: 1262
          },{
            suffix: '.desktop-medium',
            quality: 90,
            rename: false,
            width: 1310,
            height: 873,
          },{
            suffix: '.desktop-medium.2x',
            quality: 85,
            rename: false,
            width: 2620,
            height: 1746
          },{
            suffix: '.desktop-large',
            quality: 90,
            rename: false,
            width: 1758,
            height: 1172,
          },{
            suffix: '.desktop-large.2x',
            quality: 85,
            rename: false,
            width: 3516,
            height: 2344
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'src/photos/portfolio/',
          dest: '_site/photos/portfolio/'
        }]
      },
      tiny: {
        options: {
          sizes: [{
            suffix: '.tiny',
            quality: 90,
            rename: false,
            width: 36,
            height: 36
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: 'src/photos/',
          dest: 'src/photos-tiny/'
        }]
      },
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['responsive_images']);
  grunt.registerTask('default', ['build']);
}
