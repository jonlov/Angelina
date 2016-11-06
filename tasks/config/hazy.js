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
    // grunt.initConfig({
    //     hazy: {
    //         php: {
    //             expand: true,
    //             cwd: 'src',
    //             dest: 'dest',
    //             src: [ '*.php' ]
    //         }
    //     }
    // });

    // expand: true,
    // src: ['js/**/*.js', 'bower_components_personal/**/*.js'],
    // dest: pipeline.temporalFolder,
    // cwd: pipeline.temporalFolder

    grunt.config.set('hazy', {
        php: {
            expand: true,
            src: ['**/*.php', '**/.*.php', '!**/class.*.php'],
            dest: pipeline.temporalFolder,
            cwd: pipeline.temporalFolder
        },
        // js: {
        //     src: pipeline.temporalFolder + '/js/hazy.js', //require('../pipeline').jsFilesToHazyProd,
        //     // dest: pipeline.temporalFolder,
        //     // cwd: pipeline.temporalFolder
        //     dest: pipeline.temporalFolder + '/js/hazy.js'
        // }
    });
    // grunt.config.set('hazy', {
    //     js: {
    //         expand: true,
    //         src: ['js/**/*.js', 'bower_components_personal/**/*.js'],
    //         dest: pipeline.temporalFolder,
    //         cwd: pipeline.temporalFolder
    //     }
    // });

    grunt.loadNpmTasks('grunt-hazy');
};