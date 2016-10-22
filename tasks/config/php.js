/**
 * Start PHP server.
 *
 * For usage docs see:
 *      https://github.com/sindresorhus/grunt-php
 *
 */

module.exports = function(grunt) {
    grunt.config.set('php', {
        dist: {
            options: {
            	base: './public',
                port: 5000
            }
        }
    });

    grunt.loadNpmTasks('grunt-php');
};