var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var filesize = require('gulp-filesize');

var watchDir = 'public';

gulp.task('server', function(next) {
  var connect = require('connect'),
      server = connect();
  server.use(connect.static(watchDir)).listen(process.env.PORT || 3000, next);
});

gulp.task('watch', ['server'], function() {




	var server = livereload();
	gulp.watch(watchDir + '/resources/css/**').on('change', function(file) {
		server.changed(file.path);
	});
	gulp.watch('public/resources/sass/**').on('change', function(file){
		gulp.run('compass');
	});

  gulp.watch('public/resources/js/**').on('change', function(file){
    gulp.run('appjs');
  });
});


gulp.task('vendorjs', function() {  
  return gulp.src(['public/resources/js/vendor/jquery-1.11.0.min.js', 'public/resources/js/vendor/*.js', 'public/resources/d3-master/d3.min.js', 'public/resources/c3-master/c3.js'])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/resources/js/'))
    .pipe(filesize())
    .on('error', gutil.log)
});

gulp.task('appjs', function() {  
  return gulp.src(['public/resources/js/app.js', 'public/resources/js/app-graph.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/resources/js/'))
    .pipe(filesize())
    .on('error', gutil.log)
});

gulp.task('useminjs', function() {
  gulp.src('./app/templates/*.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('compass', function(){
	gulp.src( ['./public/resources/sass/templates/*.scss', './public/resources/sass/*.scss', './public/resources/sass/bootstrap/override.scss'], {base: './public/resources/sass/'} )
		.pipe(compass({
            config_file: './config.rb',
            css: './public/resources/css',
            sass: './public/resources/sass',
        })).on('error', function(err) {
            //console.log(err);
        })
        .pipe( prefix("last 2 version", "ie 8") )
		.pipe( gulp.dest('./public/resources/css')
	);
});
