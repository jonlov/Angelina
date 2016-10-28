/**
 * Minify files with HtmlMin.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side html `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-htmlmin
 *
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {

    grunt.config.set('htmlmin', {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                ignoreCustomFragments: [
                    /<%[\s\S]*?%>/,
                    /<\?[\s\S]*?\?>/,
                    /\{{[\s\S]*?}}/g,
                    /<{{[\s\S]*?}}>/g
                ]
            },
            files: [{
                    expand: true,
                    src: ['**/*.html'],
                    dest: pipeline.temporalFolder,
                    cwd: pipeline.temporalFolder
                }]
                // files: { 
                //     // 'tpl/app_calendar.html': 'src/index.html'
                //         // expand: true,
                //         src: ['tpl/**/*.html'],
                //         dest: pipeline.temporalFolder,
                //         cwd: pipeline.temporalFolder
                // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};