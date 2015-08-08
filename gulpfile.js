/**
 * Created by suryarakesh on 7/26/2015.
 */
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var browserSync = require('browser-sync').create();
var aws = require("aws-lib");

/*var prodAdv = aws.createProdAdvClient(yourAccessKeyId, yourSecretAccessKey, yourAssociateTag);

var options = {SearchIndex: "Books", Keywords: "Javascript"}*/

/*/!*prodAdv.call("ItemSearch", options, function(err, result) {
    console.log(result);*!/
})*/
gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: "app",
            routes: {
                "/bower_components": "bower_components",
                "/app/js":"app/js",
                "/app/partials":"/app/partials",
                "/app/images":"/app/images"
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

