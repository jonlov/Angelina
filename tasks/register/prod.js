module.exports = function(grunt) {
    grunt.config.set('pkg', grunt.file.readJSON('package.json'));

    grunt.registerTask('prod', [
        'compileAssetsProd',
        'concat:js',
        'concat:css',
        'replace',
        'uglify:dist',
        'jsObfuscate',
        'concat:renew',
        'clean:renew',
        'cssmin',
        'linkAssetsBuildProd',
        'htmlmin',
        'phpmin',
        'hazy:php',
        'imagemin',
        
        // // 'uncss',
        'php',
        'watch'
    ]);
};