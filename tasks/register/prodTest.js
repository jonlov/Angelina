module.exports = function(grunt) {
    grunt.config.set('pkg', grunt.file.readJSON('package.json'));

    grunt.registerTask('prodTest', [
        'compileAssetsProd',
        'concat:js',
        'concat:css',
        'replace:dev',
        'uglify:dist',
        'jsObfuscate',
        'concat:renew',
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