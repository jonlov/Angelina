/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the Temporal Folder of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {

    grunt.config.set('clean', {
        dev: [pipeline.temporalFolder + '/**'],
        build: ['www'],
        renew: [pipeline.temporalFolder + '/js/renewMe.js']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};