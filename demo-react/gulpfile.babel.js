'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';

gulp.task('compile_scss', () => {
  gulp.src(SCSS_SRC) //creating a string of readable files
  .pipe(sass().on('error', sass.logError)) // compiling to css
  .pipe(minifyCSS()) //minifying the css
  .pipe(rename({ suffix: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST))
});

//Detect changes in the scss files
gulp.task('watch_scss', () => {
  gulp.watch(SCSS_SRC, ['compile_scss'])
})

//runs all tasks
gulp.task('default', ['watch_scss'])
