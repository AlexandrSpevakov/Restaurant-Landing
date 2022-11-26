import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import concat from "gulp-concat";
import cssImport from "gulp-cssimport";
// import size from 'gulp-size';

// Task
export default () => {
  return (
    gulp
      .src(path.css.src)
      .pipe(gulpIf(app.isDev, sourcemaps.init()))
      .pipe(concat("main.css"))
      .pipe(cssImport())
      .pipe(autoPrefixer())
      .pipe(gulp.dest(path.css.dest))
      // .pipe(size({title: 'main.css'}))
      .pipe(rename(app.rename))
      .pipe(csso())
      // .pipe(size({title: 'main.min.css'}))
      .pipe(gulpIf(app.isDev, sourcemaps.write(".")))
      .pipe(gulp.dest(path.css.dest))
  );
};
