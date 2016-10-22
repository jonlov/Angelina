/**
 * Precompiles Underscore templates to a `.jst` file.
 *
 * ---------------------------------------------------------------
 *
 * (i.e. basically it takes HTML files and turns them into tiny little
 *  javascript functions that you pass data to and return HTML. This can
 *  speed up template rendering on the client, and reduce bandwidth usage.)
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-jst
 *
 */
var pipeline = require('../pipeline'),
    jstSett = {
        dev: {

            // To use other sorts of templates, specify a regexp like the example below:
            // options: {
            //   templateSettings: {
            //     interpolate: /\{\{(.+?)\}\}/g
            //   }
            // },

            // Note that the interpolate setting above is simply an example of overwriting lodash's
            // default interpolation. If you want to parse templates with the default _.template behavior
            // (i.e. using <div></div>), there's no need to overwrite `templateSettings.interpolate`.
            files: {}
        }
    };
module.exports = function(grunt) {

    jstSett.dev.files[pipeline.temporalFolder.toString() + '/jst.js'] = pipeline.templateFilesToInject;

    grunt.config.set('jst', jstSett);

    grunt.loadNpmTasks('grunt-contrib-jst');
};