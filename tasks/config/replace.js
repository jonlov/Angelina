/**
 * Minify files with phpMin.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side php `assets`.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-htmlmin
 *
 */
var pipeline = require('../pipeline'),
    Gruntfile = require('../../Gruntfile');
module.exports = function(grunt) {

    grunt.config.set('replace', {
        dist: {
            options: {
                patterns: [{
                    match: 'gitID',
                    replacement: Gruntfile.gitID
                }]
            },
            files: [{
                expand: true,
                src: '**/*.{js,php,html,css}',
                dest: pipeline.temporalFolder,
                cwd: pipeline.temporalFolder
            }]
        }
    });

    grunt.loadNpmTasks('grunt-replace');
};