var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');

gulp.task('nightwatch', function() {
    return gulp.src('')
        .pipe(nightwatch({
            configFile: 'nightwatch.json'
        }));
});