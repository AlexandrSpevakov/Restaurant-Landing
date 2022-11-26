import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";

// Task
export default () => {
  return gulp
    .src(path.html.src)
    .pipe(gulpIf(app.isProd, sourcemaps.init()))
    .pipe(fileInclude())
    .pipe(size({ title: "before" }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "after" }))
    .pipe(gulpIf(app.isProd, sourcemaps.write()))
    .pipe(gulp.dest(path.html.dest));
};
