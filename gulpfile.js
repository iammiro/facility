let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');
let ghPages = require('gulp-gh-pages');
let concat = require('gulp-concat');

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.sass')
        .pipe(concat('index.sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['serve'], function() {
    gulp.src("src/**/*.*")
        .pipe(gulp.dest('dist/'));
});