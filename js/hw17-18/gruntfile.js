module.exports = function (grunt) {
    grunt.initConfig({
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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};