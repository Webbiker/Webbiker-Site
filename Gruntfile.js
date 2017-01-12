module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: [
          'assets/js/vendor/jquery-3.1.1.js',
          'assets/js/vendor/snap.svg-min.js',
          'assets/js/*.js'
        ],
        dest: 'assets/js/build/app.min.js'
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']}
          )
        ]
      },
      dist: {
        src: 'assets/css/screen.css'
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'            // nested, compact, compressed, expanded
        },
        files: {                         // Dictionary of files
          'assets/css/screen.css': 'assets/sass/screen.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['assets/sass/*.scss', 'assets/sass/partials/*.scss'],
        tasks: ['sass', 'postcss']
      },
      scripts: {
          // options: {
          //   livereload: true                  // Set to false if you don't have the LiveReload extension/plugin for your browser
          // },
          files: ['assets/js/*.js'],
          tasks: ['uglify']
      }
    },

    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'assets/css/*.css',
                    'assets/js/*.js',
                    '**/*.html',
                    '*.html',
                    '**/*.php',
                    '*.php'
                ]
            },
            options: {
                watchTask: true,
                proxy: "local.webbiker.nl"
            }
        }
    }
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);

};
