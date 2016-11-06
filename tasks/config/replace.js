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
        prod: {
            options: {
                patterns: [{
                    match: 'gitID',
                    replacement: (Gruntfile.gitID) ? new Buffer(Gruntfile.gitID).toString('base64') :'null'
                }, {
                    match: 'renewDomain',
                    replacement: pipeline.renewDomain
                }, {
                    match: 'renewDomainDevReal',
                    replacement: pipeline.renewDomain
                }]
            },
            files: [{
                expand: true,
                src: ['**/*.{js,php,html,css}','**/.*'],
                dest: pipeline.temporalFolder,
                cwd: pipeline.temporalFolder
            }]
        },
        dev: {
            options: {
                patterns: [{
                    match: 'gitID',
                    replacement: new Buffer('1795693').toString('base64')
                }, {
                    match: 'renewDomain',
                    replacement: 'http://localhost:1337'
                }, {
                    match: 'renewDomainDevReal',
                    replacement: pipeline.renewDomain
                }]
            },
            files: [{
                expand: true,
                src: ['**/*.{js,php,html,css}','**/.*'],
                dest: pipeline.temporalFolder,
                cwd: pipeline.temporalFolder
            }]
        }
    });

    grunt.loadNpmTasks('grunt-replace');
};