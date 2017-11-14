var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
    return gulp.src(['./app/temp/styles/**/*.css', '.app/temp/scripts/**/*.js'])
        .pipe(modernizr({
            "options": [
                "setClasses"
            ]
        }))
        .pipe(gulp.dest('./app/temp/scripts'));
});