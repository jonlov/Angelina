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
var pipeline = require('../pipeline');
module.exports = function(grunt) {

    grunt.config.set('phpmin', {
        dist: {
            options: {
                singleline: true,
                multiline: true,
                tabs: true,
                newline: true
            },
            files: [{
                    expand: true,
                    src: ['**/*.php', '**/*.php'],
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

    grunt.loadNpmTasks('grunt-phpmin');
};