/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)', '**/.*'],
				dest: pipeline.temporalFolder
			}]
		},
		prod: {
			files: [{
				expand: true,
				cwd: './assets',
				src: require('../pipeline').assetsFilesToCopy,
				dest: pipeline.temporalFolder
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: pipeline.temporalFolder,
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
