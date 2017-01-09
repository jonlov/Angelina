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
    var loader = '';//'<renewLoader style="position:fixed;z-index:9999;top:0;bottom:0;left:0;right:0;background:#fff;"></renewLoader>';

    grunt.config.set('replace', {
        prod: {
            options: {
                patterns: [{
                    match: 'gitID',
                    replacement: (Gruntfile.gitID) ? new Buffer(Gruntfile.gitID).toString('base64') : 'null'
                }, {
                    match: 'renewDomain',
                    replacement: pipeline.renewDomain
                }, {
                    match: 'renewDomainDevReal',
                    replacement: pipeline.renewDomain
                }, {
                    match: 'renewLoader',
                    replacement: loader
                }]
            },
            files: [{
                expand: true,
                src: ['**/*.{js,php,html,css}', '**/.*'],
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
                }, {
                    match: 'renewLoader',
                    replacement: loader
                }]
            },
            files: [{
                expand: true,
                src: ['**/*.{js,php,html,css}', '**/.*'],
                dest: pipeline.temporalFolder,
                cwd: pipeline.temporalFolder
            }]
        }
    });

    grunt.loadNpmTasks('grunt-replace');
};