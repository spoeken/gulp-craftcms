var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var usemin = require('gulp-usemin');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');


//Watch

var watchDir = 'app';

gulp.task('server', function(next) {
	var connect = require('connect'),
			server = connect();
	server.use(connect.static(watchDir)).listen(process.env.PORT || 3000, next);
});

gulp.task('watch', ['server'], function() {

	var server = livereload();
	
	gulp.watch('app/resources/css/**').on('change', function(file) {
		server.changed(file.path);
	});

	gulp.watch('app/resources/sass/**').on('change', function(file){
		gulp.run('compass');
	});

	gulp.watch('app/resources/js/**').on('change', function(file){
		gulp.run('jshint');
	});

});

gulp.task('compass', function(){
	gulp.src( ['./app/resources/sass/*.scss'], {base: './app/resources/sass/'} )
		.pipe(compass({
						config_file: './config.rb',
						css: './app/resources/css',
						sass: './app/resources/sass',
				})).on('error', function(err) {
						//console.log(err);
				})
				.pipe( prefix("last 1 version", "ie 8") )
		.pipe( gulp.dest('./app/resources/css')
	);
});

gulp.task('jshint', function () {
  return gulp.src('./app/resources/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('images', function () {
  return gulp.src('./app/resources/images/**/*')
    .pipe(cache(imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('public/resources/images'));
});

//Build

gulp.task('usemin', function() {

	return gulp.src('app/templates/**')
	.pipe(usemin({
		js: [uglify()],
		bower: [uglify()]
	}))
	.pipe(gulp.dest('./craft/templates'));
		
});

gulp.task('build', ['usemin', 'images'], function(){

	//Move
	gulp.src(['craft/templates/resources/**'])
	.pipe(gulp.dest('public/resources/'));

	//Clean

	gulp.src(['craft/templates/resources/**', 'craft/templates/resources/'], {read:false})
	.pipe(clean());

});

gulp.task('default', ['build']);






