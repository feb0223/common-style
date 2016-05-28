var gulp = require('gulp');

var commonGulp = require('common-gulp');
var tasks = commonGulp.tasks;

var args = commonGulp.minimist(process.argv.slice(2));
var isDebug = args && args.d;

var config = require('./gulpconfig');

var defaults = [];

// stylus
if (config.stylus) {
	if (isDebug) {
		config.stylus.options.linenos = true;
	}
	Object.keys(config.stylus).forEach(function(type) {
		var stylus = tasks.Stylus.create(config.stylus[type]);
		gulp.task('stylus-compile-'+type, stylus.compile({isDebug: isDebug}));
		gulp.task('stylus-analysisDependency-'+type, stylus.analysisDependency);
		gulp.task('stylus-watch-'+type, ['stylus-analysisDependency-'+type], stylus.watch({isDebug: isDebug}));
		defaults.push('stylus-compile-'+type);
		defaults.push('stylus-watch-'+type);
	});
}

// webserver
if (config.webserver) {
	gulp.task('webserver', tasks.Webserver(config.webserver));
	defaults.push('webserver');
}

gulp.task('default', defaults);
