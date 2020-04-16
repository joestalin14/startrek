let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    bourbon = require('node-bourbon'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify-es').default;

gulp.task('sass', function() {
    return gulp.src('./app/sass/main.sass')
        .pipe(sass({
            includePaths: bourbon.includePaths
        }).on('error', sass.logError))
        .pipe(autoprefixer(['last 25 versions']))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('scripts', function() {
    return gulp.src('./app/js/*.js')
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('js', function() {
    return gulp.src('./app/js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./app/build/'));
});
gulp.task('code', function() {
    return gulp.src('./app/**/*.html')
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('compress', function() {
  gulp.src('./app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./app/img'))
});
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
gulp.task('watch', function() {
    gulp.watch('./app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('./app/js/*.js', gulp.parallel('scripts'));
    gulp.watch('./app/js/*.js', gulp.parallel('js'));
    gulp.watch('./app/**/*.html', gulp.parallel('code'));
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
