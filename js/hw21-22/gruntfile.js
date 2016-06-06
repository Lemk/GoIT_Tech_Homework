module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/src/style.css': ['css/src/style.scss']
                }
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            script: {
                src: ['js/src/*.js'],
                dest: 'js/scripts.js'
            },
            style: {
                src: ['css/src/*.css'],
                dest: 'css/styles.css'
            }
        },
        uglify: {
            jsfiles: {
                files: {
                    'js/scripts.min.js': ['js/scripts.js']
                }
            }
        },
        cssmin: {
            cssfiles: {
                files: {
                    'css/styles.min.css': ['css/styles.css']
                }

            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    src: ['js/src/es6/app.js'],
                    dest: 'js/src/app.js'
                }]
            }
        },

        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['css/src/*.scss', 'js/src/es6/*.js'],
                tasks: ['sass', 'babel', 'concat', 'uglify', 'cssmin']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', [ 'sass', 'babel', 'concat',  'uglify', 'cssmin']);
};