/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {
    grunt.config.set('uglify', {
        options: {
            mangle: true,
            ASCIIOnly: true,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            }
        },
        dist: {
            expand: true,
            src: ['js/**/*.js', 'bower_components_personal/**/*.js'],
            dest: pipeline.temporalFolder,
            cwd: pipeline.temporalFolder
        },
        prod: {
            src: pipeline.temporalFolder + '/js/production.js',
            dest: pipeline.temporalFolder + '/js/production.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};