module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compileBare: {
        options: {
          bare: true
        },
        files: {
          'dist/ctextedit.js': 'src/*.coffee'
        }
      }
    },
    watch: {
      files: 'src/*coffee',
      tasks: ['coffee']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['coffee']);
}
