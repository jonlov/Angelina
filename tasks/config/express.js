/**
 * Minify files with HtmlMin.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side html `assets`.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-htmlmin
 *
 */
module.exports = function(grunt) {

    grunt.config.set('express', {
        dist: {
            options: {
                script: './server.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
};