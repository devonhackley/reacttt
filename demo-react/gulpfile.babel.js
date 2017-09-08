'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';
const SCSS_FONT = './src/assets/font-awesome-4.7.0';
const SCSS_FONT_DEST = './src/assets/fonts';

gulp.task('compile_scss', () => {
  gulp.src(SCSS_SRC) //creating a string of readable files
  .pipe(sass().on('error', sass.logError)) // compiling to css
  .pipe(minifyCSS()) //minifying the css
  .pipe(rename({ suffix: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST))
});

gulp.task('compile_fonts', () => {
  return gulp.src(SCSS_FONT)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({ suffix: '.min'}))
  .pipe(changed(SCSS_FONT_DEST))
  .pipe(gulp.dest(SCSS_FONT_DEST))
})

//Detect changes in the scss files
gulp.task('watch_scss', () => {
  gulp.watch(SCSS_SRC, ['compile_scss'])
  gulp.watch(SCSS_FONT, ['compile_fonts'])

})

//runs all tasks
gulp.task('default', ['watch_scss'])
