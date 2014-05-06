/*
 * Assemble
 * https://github.com/assemble/boilerplate-sitemap
 *
 * Copyright (c) 2013 Upstage
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: grunt.file.readYAML('config.yml'),
      component: {
        files: {
          'Sitemap.xml': ['src/sitemap.hbs']
        }
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-verb');

  // Default tasks to be run.
  grunt.registerTask('default', ['assemble:component']);
};
