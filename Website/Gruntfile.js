/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    var path = require('path');
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: 'wwwroot/lib',
                    layout: "byType",
                    install: false,
                    verbose: false,
                    cleanTargetDir: true,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },
        uglify: {
            
            min: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: grunt.file.expandMapping(['assets/js/modules/*/*.js'], 'wwwroot/lib/js/veropath/', {
                    flatten: true,
                    rename: function (destBase, destPath) {
                        return destBase + destPath.replace('.js', '.min.js');
                    }
                })
            }
        }
    });
    grunt.registerTask("default", ["bower:install", "uglify:min"]);
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};