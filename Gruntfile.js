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
    less: {
      development: {
        files: {
          'dist/ctextedit.css': 'src/less/main.less'
        }
      }
    },
    watch: {
      files: ['src/*coffee', 'src/less/*.less'],
      tasks: ['coffee', 'less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['coffee', 'less']);
}
