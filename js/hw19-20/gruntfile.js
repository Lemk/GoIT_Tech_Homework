module.exports = function (grunt) {
    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'css/src/styles.css': ['css/src/styles.scss']
                }
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            script: {
                src: ['js/src/*.js'],
                dest: 'build/script.js'
            },
            style: {
                src: ['css/src/*.css'],
                dest: 'build/styles.css'
            }
        },
        uglify: {
            jsfiles: {
                files: {
                    'js/script.min.js': ['build/script.js']
                }
            }
        },
        cssmin: {
            cssfiles: {
                files: {
                    'css/styles.min.css': ['build/styles.css']
                }

            }
        },
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['css/src/*.scss'],
                tasks: ['sass'],
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin']);
};