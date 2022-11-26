import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import size from "gulp-size";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const sass = gulpSass(dartSass);

// Task
export default () => {
  return gulp
    .src(path.scss.src)
    .pipe(gulpIf(app.isDev, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(path.scss.dest))
    .pipe(size({ title: "main.css" }))
    .pipe(rename(app.rename))
    .pipe(postcss([cssnano()]))
    .pipe(size({ title: "main.min.css" }))
    .pipe(gulpIf(app.isDev, sourcemaps.write(".")))
    .pipe(gulp.dest(path.scss.dest));
};
