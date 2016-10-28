module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compileAssets',
		'concat:before',
		'uglify',
		'cssmin',
		'linkAssetsBuildProd',
		'clean:build',
		'copy:build'
	]);
};
