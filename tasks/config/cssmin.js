/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {

    grunt.config.set('cssmin', {
        dist: {
            expand: true,
            src: [
                'css/**/*.css',
                'bower_components_personal/**/*.css',
                'simple-line-icons/css/simple-line-icons.min.css'
            ],
            dest: pipeline.temporalFolder,
            cwd: pipeline.temporalFolder
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};