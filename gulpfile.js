/* ------------------------
 * Dependencies
 * ----------------------- */
var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();


/* ----------------------------------------
 * Paths; all paths and globs used in tasks
 * ---------------------------------------- */
var paths = {
	src: {},
	build: {}
};

// browser
paths.src.root = './src/';
paths.src.appScriptsRoot = paths.src.root + 'scripts/';
paths.src.appScripts = paths.src.appScriptsRoot + '*.coffee';
paths.src.appEntryScript = paths.src.appScriptsRoot + 'app.coffee';

paths.src.fonts =  paths.src.root + 'fonts/*';
paths.src.images =  paths.src.root + 'images/*';

paths.src.stylesRoot = paths.src.root + 'styles/';
paths.src.styles = paths.src.stylesRoot + '*.less';
paths.src.styleEntryFile = paths.src.stylesRoot + 'app.less';

paths.src.templatesRoot = paths.src.root + 'templates/';
paths.src.templates = paths.src.templatesRoot + '*.html';

paths.src.dependencies = paths.src.root + 'third-party/**';

// public
paths.build.root = './build/';
paths.build.cssRoot = paths.build.root + 'css';
paths.build.fontsRoot =  paths.build.root + 'fonts';
paths.build.imagesRoot = paths.build.root + 'images';
paths.build.browserScriptsRoot =  paths.build.root + 'js';
paths.build.dependencies =  paths.build.root + 'node_modules';


gulp.task('default', ['compile']);

gulp.task('compile', ['fonts', 'images', 'templates', 'scripts', 'styles', 'third-party']);

gulp.task('clean', function(){
	gulp.src(paths.build.root, { read: false })
		.pipe(clean());
});

gulp.task('watch', ['compile'], function(){
	gulp.watch([paths.src.dependencies], ['third-party']);
	gulp.watch([paths.src.php], ['php']);
	gulp.watch([paths.src.fonts], ['fonts']);
	gulp.watch([paths.src.images], ['images']);
	gulp.watch([paths.src.appScripts, paths.src.compTemplates, paths.src.compScripts], ['scripts']);
	gulp.watch([paths.src.styles], ['styles']);
});




gulp.task('templates', function() {
	gulp.src(paths.src.templates)
		.pipe(gulp.dest(paths.build.root));
});

gulp.task('scripts', function(){
	gulp.src(paths.src.appEntryScript, {read:false})
		.pipe($.browserify({
			transform: ['coffeeify'],
			extensions: ['.coffee']
		}))
		.pipe($.uglify())
		.pipe($.rename('main.js'))
		.pipe(gulp.dest(paths.build.browserScriptsRoot));
});


gulp.task('fonts', function(){
	gulp.src(paths.src.fonts)
		.pipe(gulp.dest(paths.build.fontsRoot));
});

gulp.task('images', function(){
	gulp.src(paths.src.images)
	.pipe($.imagemin())
		.pipe(gulp.dest(paths.build.imagesRoot));
});

gulp.task('styles', function(){
	gulp.src(paths.src.styleEntryFile)
		.pipe($.less())
		.pipe($.minifyCss())
		.pipe($.autoprefixer('last 2 versions'))
		.pipe($.rename('main.css'))
		.pipe(gulp.dest(paths.build.cssRoot));
});

gulp.task('third-party', function(){
	gulp.src(paths.src.dependencies)
		.pipe($.concat('libs.js'))
		.pipe(gulp.dest(paths.build.browserScriptsRoot));
});