module.exports = function(grunt) {
    grunt.registerTask('default', [
        'compileAssets',
        'linkAssetsBuild',
        // 'express',
        'php',
        'watch'
    ]);
};