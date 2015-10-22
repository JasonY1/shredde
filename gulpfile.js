// Created on 10/21/2015 by Jason Yi
// Last modified on 10/21/2015 by Jason Yi

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT:8000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function(){
    console.log('Restarting');
  });
});
