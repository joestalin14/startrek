let gulp = require('gulp'),
  sass = require('gulp-sass'),
  bourbon = require('node-bourbon'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify-es').default

gulp.task('sass', function () {
  return gulp.src('./app/sass/main.sass')
        .pipe(sass({
          includePaths: bourbon.includePaths
        }).on('error', sass.logError))
        .pipe(autoprefixer(['last 25 versions']))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({stream: true}))
})
gulp.task('scripts', function () {
  return gulp.src('./app/js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.reload({stream: true}))
})
gulp.task('main-script', function () {
  return gulp.src('./app/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.reload({stream: true}))
})
gulp.task('html', function () {
  return gulp.src('./app/*.html')
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.reload({stream: true}))
})
gulp.task('compress', function () {
  gulp.src('./app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./public/img'))
  .pipe(browserSync.reload({stream: true}))
})
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'public'
    },
    notify: false
  })
})
gulp.task('watch', function () {
  gulp.watch('./app/sass/*.sass', gulp.parallel('sass'))
  gulp.watch('./app/js/*.js', gulp.parallel('scripts'))
  gulp.watch('./app/*.js', gulp.parallel('main-script'))
  gulp.watch('./app/*.html', gulp.parallel('html'))
  gulp.watch('./app/img/*', gulp.parallel('compress'))
})
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'))
