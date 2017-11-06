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
                'docs/**/*.html': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'docs/**/*.php': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'docs/tpl/views/**/*.html': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'docs/tpl/views/**/*.ejs': [
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
                'docs/**/*.html': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'docs/**/*.php': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'docs/tpl/views/**/*.html': [
                    require('../pipeline').jsFilesToInject,
                    require('../pipeline').jsFilesToConcat
                ],
                'docs/tpl/views/**/*.ejs': [
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
                'docs/**/*.html': [
                    'docs/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                 'docs/**/*.php': [
                    'docs/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                'docs/tpl/views/**/*.html': [
                    'docs/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                'docs/tpl/views/**/*.ejs': [
                    'docs/js/production.js',
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
                'docs/**/*.html': [
                    'docs/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                 'docs/**/*.php': [
                    'docs/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                'docs/tpl/views/**/*.html': [
                    'docs/js/production.js',
                    require('../pipeline').jsFilesToInject
                ],
                'docs/tpl/views/**/*.ejs': [
                    'docs/js/production.js',
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
                'docs/**/*.html': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'docs/**/*.php': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'docs/tpl/views/**/*.html': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'docs/tpl/views/**/*.ejs': [
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
                'docs/**/*.html': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'docs/**/*.php': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'docs/tpl/views/**/*.html': [
                    require('../pipeline').cssFilesToInject,
                    require('../pipeline').cssFilesToConcat
                ],
                'docs/tpl/views/**/*.ejs': [
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
                'docs/**/*.html': [
                    'docs/css/production.css',
                    require('../pipeline').cssFilesToInject
                ],
                'docs/**/*.php': [
                    'docs/css/production.css',
                    require('../pipeline').cssFilesToInject
                ]
                // 'docs/tpl/views/**/*.html': [
                //     'docs/css/production.css',
                //     require('../pipeline').cssFilesToInject
                // ],
                // 'docs/tpl/views/**/*.ejs': [
                //     'docs/css/production.css',
                //     require('../pipeline').cssFilesToInject
                // ]
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
                'docs/**/*.html': [
                    'docs/css/production.css',
                    require('../pipeline').cssFilesToInject
                ],
                'docs/**/*.php': [
                    'docs/css/production.css',
                    require('../pipeline').cssFilesToInject
                ]
                // 'docs/tpl/views/**/*.html': [
                //     'docs/css/production.css',
                //     require('../pipeline').cssFilesToInject
                // ],
                // 'docs/tpl/views/**/*.ejs': [
                //     'docs/css/production.css',
                //     require('../pipeline').cssFilesToInject
                // ]
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
                'docs/index.html': ['docs/jst.js'],
                'docs/tpl/views/**/*.html': ['docs/jst.js'],
                'docs/tpl/views/**/*.ejs': ['docs/jst.js']
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
                'docs/tpl/views/**/*.jade': require('../pipeline').jsFilesToInject
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
                'docs/tpl/views/**/*.jade': require('../pipeline').jsFilesToInject
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
                'docs/tpl/views/**/*.jade': ['docs/js/production.js']
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
                'docs/tpl/views/**/*.jade': ['docs/js/production.js']
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
                'docs/tpl/views/**/*.jade': require('../pipeline').cssFilesToInject
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
                'docs/tpl/views/**/*.jade': require('../pipeline').cssFilesToInject
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
                'docs/tpl/views/**/*.jade': ['docs/css/production.css']
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
                'docs/tpl/views/**/*.jade': ['docs/css/production.css']
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
                'docs/tpl/views/**/*.jade': ['docs/jst.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sails-linker');
};
