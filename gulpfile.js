const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });

    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['serve'], function() {
    gulp.src("src/**/*.*")
        .pipe(gulp.dest('build/'));
});