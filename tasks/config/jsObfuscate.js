// 
/**
 * Obfucate javascript and php files with Hazy.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {
    grunt.config.set('jsObfuscate', {
        test: {
            options: {
                concurrency: 2,
                keepLinefeeds: false,
                keepIndentations: false,
                encodeStrings: true,
                encodeNumbers: true,
                moveStrings: true,
                replaceNames: true,
                variableExclusions: ['^_get_', '^_set_', '^_mtd_']
            },
            files: {
                'public/js/renewMe.js': [
                    pipeline.temporalFolder + '/js/renewMe.js'
                ]
            }
        }
    });
    // {
    //        files: [
    //            pipeline.temporalFolder + '/js/production.js',
    //        ],
    //        entry: pipeline.temporalFolder + '/js/production.js',
    //        out: pipeline.temporalFolder + '/js/production.js',
    //        strings: true,
    //        root: __dirname
    //    });

    grunt.loadNpmTasks('js-obfuscator');
};