module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell:{
      ionicUpload:{
        command:"ionic upload"
      },
      ionicBuild:{
        command:"ionic build ios"
      }
    },
    watch:{
      files:['**/*'],
      tasks: ['build']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', [
    'shell:ionicBuild',
    'shell:ionicUpload'
  ]);
};
