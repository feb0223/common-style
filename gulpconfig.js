var stylusOptions = {
	define: {
		commonStylePath: '../../../../stylus/',
		bootstrapPath: '../../node_modules/bootstrap-styl/bootstrap/'
	},
	compress: false,
	linenos: false
};
module.exports = {
	stylus: {
		pc: {
			srcDir: './sample/src/stylus/pc/',
			destDir: './sample/public/pc/css/',
			useNib: true,
			useNormalize: true,
			options: stylusOptions
		},
		sp: {
			srcDir: './sample/src/stylus/pc/',
			destDir: './sample/public/sp/css/',
			useNib: true,
			useNormalize: true,
			options: stylusOptions
		},
		responsive: {
			srcDir: './sample/src/stylus/responsive/',
			destDir: './sample/public/responsive/css/',
			useNib: true,
			useNormalize: true,
			options: stylusOptions
		}
	},
	webserver: {
		rootDir: './sample/public/',
		options: {
			host: '0.0.0.0',
			directoryListing: false,
			port: 3000
		}
	}
};