/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 *      https://github.com/Zolmeister/grunt-sails-linker
 *
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {

    grunt.config.set('sails-linker', {
        devJs: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/**/*.html': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'public/tpl/views/**/*.html': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'public/tpl/views/**/*.ejs': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ]
            }
        },

        devJsRelative: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: pipeline.temporalFolder,
                relative: true
            },
            files: {
                'public/**/*.html': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'public/tpl/views/**/*.html': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'public/tpl/views/**/*.ejs': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ]
            }
        },

        prodJs: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/**/*.html': [
                    'public/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                'public/tpl/views/**/*.html': [
                    'public/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                'public/tpl/views/**/*.ejs': [
                    'public/js/production.js',
                    require('../pipeline').jsFilesToInject
                ]
            }
        },

        prodJsRelative: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: pipeline.temporalFolder,
                relative: true
            },
            files: {
                'public/**/*.html': [
                    'public/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                'public/tpl/views/**/*.html': [
                    'public/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                'public/tpl/views/**/*.ejs': [
                    'public/js/production.js',
                    require('../pipeline').jsFilesToInject
                ]
            }
        },

        devStyles: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/**/*.html': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'public/tpl/views/**/*.html': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'public/tpl/views/**/*.ejs': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ]
            }
        },

        devStylesRelative: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: pipeline.temporalFolder,
                relative: true
            },
            files: {
                'public/**/*.html': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'public/tpl/views/**/*.html': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'public/tpl/views/**/*.ejs': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ]
            }
        },

        prodStyles: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/index.html': [
                    'public/css/production.css',
                    require('../pipeline').cssFilesToInject
                ],
                'public/tpl/views/**/*.html': [
                    'public/css/production.css',
                    require('../pipeline').cssFilesToInject
                ],
                'public/tpl/views/**/*.ejs': [
                    'public/css/production.css',
                    require('../pipeline').cssFilesToInject
                ]
            }
        },

        prodStylesRelative: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: pipeline.temporalFolder,
                relative: true
            },
            files: {
                'public/index.html': [
                    'public/css/production.css',
                    require('../pipeline').cssFilesToInject
                ],
                'public/tpl/views/**/*.html': [
                    'public/css/production.css',
                    require('../pipeline').cssFilesToInject
                ],
                'public/tpl/views/**/*.ejs': [
                    'public/css/production.css',
                    require('../pipeline').cssFilesToInject
                ]
            }
        },

        // Bring in JST template object
        devTpl: {
            options: {
                startTag: '<!--TEMPLATES-->',
                endTag: '<!--TEMPLATES END-->',
                fileTmpl: '<script type="text/javascript" src="%s"></script>',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/index.html': ['public/jst.js'],
                'public/tpl/views/**/*.html': ['public/jst.js'],
                'public/tpl/views/**/*.ejs': ['public/jst.js']
            }
        },

        devJsJade: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/tpl/views/**/*.jade': require('../pipeline').jsFilesToInject
            }
        },

        devJsRelativeJade: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: pipeline.temporalFolder,
                relative: true
            },
            files: {
                'public/tpl/views/**/*.jade': require('../pipeline').jsFilesToInject
            }
        },

        prodJsJade: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/tpl/views/**/*.jade': ['public/js/production.js']
            }
        },

        prodJsRelativeJade: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: pipeline.temporalFolder,
                relative: true
            },
            files: {
                'public/tpl/views/**/*.jade': ['public/js/production.js']
            }
        },

        devStylesJade: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: pipeline.temporalFolder
            },

            files: {
                'public/tpl/views/**/*.jade': require('../pipeline').cssFilesToInject
            }
        },

        devStylesRelativeJade: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: pipeline.temporalFolder,
                relative: true
            },

            files: {
                'public/tpl/views/**/*.jade': require('../pipeline').cssFilesToInject
            }
        },

        prodStylesJade: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/tpl/views/**/*.jade': ['public/css/production.css']
            }
        },

        prodStylesRelativeJade: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: pipeline.temporalFolder,
                relative: true
            },
            files: {
                'public/tpl/views/**/*.jade': ['public/css/production.css']
            }
        },

        // Bring in JST template object
        devTplJade: {
            options: {
                startTag: '// TEMPLATES',
                endTag: '// TEMPLATES END',
                fileTmpl: 'script(type="text/javascript", src="%s")',
                appRoot: pipeline.temporalFolder
            },
            files: {
                'public/tpl/views/**/*.jade': ['public/jst.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sails-linker');
};