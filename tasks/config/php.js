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
                port: 8080
            }
        }
    });

    grunt.loadNpmTasks('grunt-php');
};