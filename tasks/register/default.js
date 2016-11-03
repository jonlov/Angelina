module.exports = function(grunt) {
    grunt.registerTask('default', [
        'compileAssets',
        'linkAssetsBuild',
		'phpmin',
		'hazy:php',
        // 'express',
        'php',
        'watch'
    ]);
};