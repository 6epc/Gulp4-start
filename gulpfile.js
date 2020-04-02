let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  del = require('del');

//SASS TASK
gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//HTML TASK
gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe(browserSync.reload({
      stream: true
    }));
});

// MAIN JS TASK
gulp.task('script', function () {
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({
      stream: true
    }));
});

//LIBS JS TASK
gulp.task('js', function () {
  return gulp.src([
      'node_modules/jquery/dist/jquery.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//BROWSER-SYNC TASK
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
});

// WATCH TASK
gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
  gulp.watch('app/**/*.html', gulp.parallel('html'));
  gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task('default', gulp.parallel('sass', 'js', 'browser-sync', 'watch'));

//CLEAN TASK
gulp.task('clean', async function () {
  del.sync('./dist');
});

// BUILD TASK
gulp.task('build', async function () {
  let buildHTML = gulp.src('app/**/*.html')
    .pipe(gulp.dest('./dist'));
  let buildCss = gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('./dist/css'));
  let buildJs = gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('./dist/js'));
  let buildFonts = gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts'));
  let buildImg = gulp.src('app/img/**/*.*')
    .pipe(gulp.dest('./dist/img'));
});