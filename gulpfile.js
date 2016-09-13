var gulp = require('gulp'),
    mkdir = require('mkdirp'),
    runSequence = require('run-sequence'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('default', ['build']);

gulp.task('build', ['build:sequence'], function() {
    return gulp.src('')
        .pipe($.notify({
            onLast: true,
            message: 'build complete!'
        }));
});

gulp.task('build:sequence', function() {
    return runSequence('build:folder', 'build:index');
});

gulp.task('build:index', function() {
    var appSrc = '/src/app',
        vendorConfig = require('./gulp.vendor-config.js')(),
        config = {
            jsSource: vendorConfig.js.concat([
                appSrc + '/**/*.module.js',
                appSrc + '/common/**/*.js',
                appSrc + '/**/*.js'
            ]),
            cssSource: vendorConfig.css.concat([
                appSrc + '/css/main.css'
            ])
        },
        jsSource = gulp.src(config.jsSource, {read:false})
            .pipe($.print()),
        cssSource = gulp.src(config.cssSource, {read:false})
            .pipe($.print());

    console.log('injecting script and css files into index.html');

    return gulp.src( './src/index.html')
        .pipe($.inject(jsSource, { relative: true }))
        .pipe($.inject(cssSource, { relative: true }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build:folder', function() {
    return mkdir('./dist', function(err) {
        if (err) {
            log(err);
            process.exit(1);
        }
    });
});