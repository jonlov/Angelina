module.exports = function(grunt) {
    grunt.config.set('pkg', grunt.file.readJSON('package.json'));

    grunt.registerTask('prodTest', [
        'compileAssetsProd',
        'concat:js',
        'concat:css',
        'replace:prod',
        'uglify:dist',
        'concat:renew',
        'jsObfuscate',
        'concat:renewToProd',
        'clean:renew',
        'cssmin',
        'linkAssetsBuildProd',
        'htmlmin',
        'phpmin',
        'hazy:php',
        // 'imagemin',
        
        // // 'uncss',
        'php',
        'watch'
    ]);
};