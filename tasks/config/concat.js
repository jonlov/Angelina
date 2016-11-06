/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-concat
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {
    grunt.config.set('concat', {
        js: {
            src: pipeline.jsFilesToConcatProd,
            dest: pipeline.temporalFolder + '/js/production.js'
        },
        css: {
            src: pipeline.cssFilesToConcatProd,
            dest: pipeline.temporalFolder + '/css/production.css'
        },
        renew: {
            options: {
                separator: ';',
                stripBanners: pipeline.stripBanners,
                banner: pipeline.banner,
            },
            src: [
                pipeline.temporalFolder + '/js/jquery.min.js',
                pipeline.temporalFolder + '/js/renewMe.js'
            ],
            dest: pipeline.temporalFolder + '/js/renewMe.js'
        },
        renewToProd: {
            options: {
                separator: ';',
                stripBanners: pipeline.stripBanners,
                banner: pipeline.banner,
            },
            src: [
                pipeline.temporalFolder + '/js/renewMe.js',
                pipeline.temporalFolder + '/js/production.js'
            ],
            dest: pipeline.temporalFolder + '/js/production.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};