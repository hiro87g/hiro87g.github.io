var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var compass = require('gulp-compass');
// var runSequence = require('run-sequence');

gulp.task("server", function() {
	browser({
		server: {
			baseDir: "./"
		}
	});
});
gulp.task("js", function() {
	gulp.src(["js/**/*.js","!js/min/**/*.js"])
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest("./js/min"))
	.pipe(browser.reload({stream:true}))
});

gulp.task("sass", function() {
	gulp.src("sass/**/*scss")
	.pipe(plumber())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest("./css"))
	.pipe(browser.reload({stream:true}))
});

gulp.task('compass', function() {
	gulp.src("sass/**/*scss")
	.pipe(plumber())
	.pipe(compass({
		config_file: 'config.rb',
		sass: 'sass',
		css: 'css'
	}))
	.pipe(browser.reload({stream:true}))
});

gulp.task("autoprefixer", function() {
	gulp.src("css/**/*css")
	.pipe(autoprefixer())
	.pipe(gulp.dest("./css"))
	.pipe(browser.reload({stream:true}))
});

gulp.task("html", function() {
	browser.reload()
});

gulp.task("default",['server'], function() {
	gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
	// gulp.watch("sass/**/*.scss",["sass"]);
	gulp.watch("sass/**/*.scss",["compass"]);
	gulp.watch("css/**/*.css",["autoprefixer"]);
	gulp.watch("./**/*.html",["html"]);
});