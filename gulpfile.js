const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task('default', () => {
  return gulp.src(['src/*.php', 'src/*/**.php'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['php']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});
