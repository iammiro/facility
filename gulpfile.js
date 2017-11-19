let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');
let ghPages = require('gulp-gh-pages');
let concat = require('gulp-concat');

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('serve', ['sass', 'html', 'js'], function () {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src//*.html', ['html']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('dist/**/*.*').on('change', browserSync.reload);
    gulp.watch('dist/*.*').on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.sass')
        .pipe(concat('index.sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('./dist/'))
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('default', ['serve'], function() {
    gulp.src("src/**/*.*")
        .pipe(gulp.dest('dist/'));
});