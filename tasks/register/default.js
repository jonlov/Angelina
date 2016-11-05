module.exports = function(grunt) {
    grunt.registerTask('default', [
        'compileAssets',
        'linkAssetsBuild',
        'replace:dev',
        // 'express',
        'php',
        'watch'
    ]);
};