module.exports = function(grunt) {
    grunt.config.set('pkg', grunt.file.readJSON('package.json'));

    grunt.registerTask('prodTest', [
        // 'imagemin',
        
        'compileAssetsProd',
        'concat:js',
        'concat:css',
        
        'replace:dev',
        
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
        
        // // 'uncss',
        'php',
        'watch'
    ]);
};