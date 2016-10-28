/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-cssmin
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {
    // imagemin: {
    //    dist: {
    //       options: {
    //         optimizationLevel: 5
    //       },
    //       files: [{
    //          expand: true,
    //          cwd: 'src/images',
    //          src: ['**/*.{png,jpg,gif}'],
    //          dest: 'dist/'
    //       }]
    //    }

    grunt.config.set('imagemin', {
        dist: {
            options: {
                optimizationLevel: 5
            },
            files: [{
                expand: true,
                src: ['**/*.{png,jpg,gif}'],
                dest: pipeline.temporalFolder,
                cwd: pipeline.temporalFolder
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};