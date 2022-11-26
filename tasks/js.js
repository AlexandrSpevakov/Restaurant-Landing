import gulp from 'gulp';

// Config
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';
import rename from 'gulp-rename';
// import size from 'gulp-size';

// Task
export default () => {
   return gulp.src(path.js.src)
   .pipe(gulpIf(app.isDev, sourcemaps.init()))
   .pipe(babel())
   .pipe(gulp.dest(path.js.dest))
   // .pipe(size({title: 'main.min.js'}))
   .pipe(rename(app.rename))
   .pipe(uglify())
   // .pipe(size({title: 'main.js'}))
   .pipe(gulpIf(app.isDev, sourcemaps.write('.')))
   .pipe(gulp.dest(path.js.dest))
}