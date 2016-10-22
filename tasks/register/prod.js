module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compileAssetsProd',
		'concat',
		'uglify',
		'cssmin',
		'linkAssetsBuildProd',
		'htmlmin'
	]);
};
