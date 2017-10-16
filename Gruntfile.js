module.exports = function(grunt) {
  const webp = require('imagemin-webp');
  const mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
      blog: {
        options: {
          sizes: [{
            suffix: '.mobile',
            rename: false,
            width: 356,
            height: 427
          },{
            suffix: '.mobile.2x',
            rename: false,
            width: 712,
            height: 854
          },{
            suffix: '.tablet',
            rename: false,
            width: 610,
            height: 407
          },{
            suffix: '.tablet.2x',
            rename: false,
            width: 1220,
            height: 813
          },{
            suffix: '.desktop',
            rename: false,
            width: 1250,
            height: 833,
          },{
            suffix: '.desktop.2x',
            rename: false,
            width: 2500,
            height: 1667
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'src/photos/blog/',
          dest: 'resized-photos/blog/'
        }]
      },
      blogIndex: {
        options: {
          sizes: [{
            suffix: '.mobile',
            rename: false,
            width: 300,
            height: 300
          },{
            suffix: '.mobile.2x',
            rename: false,
            width: 600,
            height: 600
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'src/photos/blog-index/',
          dest: 'resized-photos/blog-index/'
        }]
      },
      portfolio: {
        options: {
          sizes: [{
            suffix: '.mobile',
            rename: false,
            width: 365,
            height: 243
          },{
            suffix: '.mobile.2x',
            rename: false,
            width: 730,
            height: 486
          },{
            suffix: '.tablet',
            rename: false,
            width: 719,
            height: 479
          },{
            suffix: '.tablet.2x',
            rename: false,
            width: 1438,
            height: 958
          },{
            suffix: '.desktop',
            rename: false,
            width: 946,
            height: 631
          },{
            suffix: '.desktop.2x',
            rename: false,
            width: 1892,
            height: 1262
          },{
            suffix: '.desktop-medium',
            rename: false,
            width: 1310,
            height: 873
          },{
            suffix: '.desktop-medium.2x',
            rename: false,
            width: 2620,
            height: 1746
          },{
            suffix: '.desktop-large',
            rename: false,
            width: 1758,
            height: 1172
          },{
            suffix: '.desktop-large.2x',
            rename: false,
            width: 3516,
            height: 2344
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'src/photos/portfolio/',
          dest: 'resized-photos/portfolio/'
        }]
      },
      tiny: {
        options: {
          sizes: [{
            suffix: '.tiny',
            rename: false,
            width: 36,
            height: 36
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: 'src/photos/',
          dest: 'resized-photos-tiny/'
        }]
      },
    },

    imagemin: {
      photos: {
        options: {
          use: [mozjpeg()],
          progressive: true,
          quality: 80
        },
        files: [{
          expand: true,
          cwd: 'resized-photos/',
          src: ['**/*.jpg'],
          dest: '_site/photos/',
          filter: function (dest) {
            var cwd = this.cwd, src = dest.replace(new RegExp('^' + cwd), '');
            dest = grunt.task.current.data.files[0].dest;
            return (!grunt.file.exists(dest + src));
          }
        }]
      },
      photosWebP: {
        options: {
          use: [webp()],
          quality: 50
        },
        files: [{
          expand: true,
          cwd: 'resized-photos/',
          src: ['**/*.jpg'],
          dest: '_site/photos/',
          ext: '.webp',
          extDot: 'last',
          filter: function (dest) {
            var cwd = this.cwd, src = dest.replace(new RegExp('^' + cwd), '').replace(new RegExp('.jpg$'), '.webp');
            dest = grunt.task.current.data.files[0].dest;
            return (!grunt.file.exists(dest + src));
          }
        }]
      },
      photosTiny: {
        options: {
          use: [mozjpeg()],
          quality: 50
        },
        files: [{
          expand: true,
          cwd: 'resized-photos-tiny/',
          src: ['**/*.jpg'],
          dest: 'src/photos-tiny/',
          filter: function (dest) {
            var cwd = this.cwd, src = dest.replace(new RegExp('^' + cwd), '');
            dest = grunt.task.current.data.files[0].dest;
            return (!grunt.file.exists(dest + src));
          }
        }]
      }
    },

    jekyll: {
      all: {
        options: {
          config: '_config.yml'
        }
      }
    },

    filerev: {
      js: {
        src: ['_site/js/*.js']
      }
    },

    filerev_match_replace: {
        all: {
            src: '_site/**/*.html',
            options: {
                analyzers: [
                    'css-background-analyzer',
                    'html-image-analyzer',
                    'html-link-analyzer',
                    'html-script-analyzer'
                ],
                webroot: "_site"
            }
        }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['responsive_images', 'imagemin', 'jekyll', 'filerev', 'filerev_match_replace']);
  grunt.registerTask('default', ['build']);
}
