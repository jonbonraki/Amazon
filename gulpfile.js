/**
 * Created by suryarakesh on 7/26/2015.
 */
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var browserSync = require('browser-sync').create();
plugins.uglify = require('gulp-uglify');
plugins.concat = require('gulp-concat');
/*
var paths = {

    js: ['./app/js/!*.js', './app/js/!**!/!*.js'],
partials:['./app/partials/!*.html', './app/partials/!**!/!*.html'],
    dist: {
        css: './public/css/',
        js: './public/js/',
partials:"./public/partials/'"
    },

};
*/



/*
gulp.task('clean', function() {
    rimraf.sync(paths.dist.css);
    rimraf.sync(paths.dist.js);
    rimraf.sync(paths.dist.partials);
})
*/

gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: "app",
            routes: {
                "/bower_components": "bower_components",
                "/app/js":"app/js",
                "/app/partials":"/app/partials"
            }
        }


    });


    gulp.watch("app/*.html").on('change', browserSync.reload);
});

/*gulp.task('js', function() {
    gulp.src(paths.js)
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.uglify({mangle: false}))
        .pipe(gulp.dest(paths.dist.js));
});

gulp.task('partials', function() {
    gulp.src(paths.partials)
        .pipe(gulp.dest(paths.dist.partials));
});*/

gulp.task('dist', function() {
    // add some optimizations (?)
});



gulp.task('build', [ 'serve', 'dist']);

gulp.task('default', ['build']);

