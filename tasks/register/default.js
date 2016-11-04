module.exports = function(grunt) {
    grunt.registerTask('default', [
        'compileAssets',
        'linkAssetsBuild',
        // 'replace',
        // 'express',
        'php',
        'watch'
    ]);
};