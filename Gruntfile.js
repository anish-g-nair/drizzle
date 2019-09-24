module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        mangle:true,
        compress:true
      },
      default: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // <%= pkg.version %> <%= pkg.name %>
};