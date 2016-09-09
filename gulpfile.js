var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    plumber      = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload,
    imagemin     = require('gulp-imagemin'),
    clean        = require('gulp-clean'),
    jshint       = require('gulp-jshint')
    stylish      = require('jshint-stylish');

var config = {
      path: {
        dest: './dist',
        src: './app'
      }
    };

//Task for html
gulp.task('html', reload);

//Task for transpile sass to one css file(style.css) and make source map (not minified)
gulp.task('sass', function(){
  return gulp.src(config.path.src + '/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.path.src + '/css'))
    .pipe(reload({stream: true}));
});

//Task for transpile sass to one css file(style.css) and minify the css
gulp.task('build:sass', ['build:clean'], function(){
  return gulp.src(config.path.src + '/sass/style.scss')
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(config.path.dest + '/css'));
});

//Task for scripts knowing which one is error in js
gulp.task('jshint', function(){
  return gulp.src(
      [
        config.path.src + '/js/**/*.js',
        '!'+ config.path.src + '/js{,/**/*.min.js}',
        '!'+ config.path.src + '/js/plugins.js'
      ]
    )
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

//Task for scripts concatenate all scripts in folder 'plugins' to plugins.js (not minified)
gulp.task('scripts', function(){
  //used to make sure the sources is in order
  var source = [
    config.path.src + '/js/plugins/modernizr-2.8.3.min.js'
    config.path.src + '/js/plugins/file1.js',
    config.path.src + '/js/plugins/file2.js'
  ]
  // return gulp.src(source)
  return gulp.src(config.path.src + '/js/plugins/*.js')
    .pipe(plumber())
    .pipe(concat('./plugins.js'))
    .pipe(gulp.dest(config.path.src + '/js/'))
    .pipe(reload({stream: true}));
});

//Task for minifying plugin scripts
gulp.task('build:scripts', ['build:clean'], function(){
  return gulp.src(config.path.src + '/js/*.js')
    .pipe(plumber())
    .pipe(gulp.dest(config.path.dest + '/js/'));
});

//Task for compressing image assets (JPG, PNG, SVG)
gulp.task('build:images', ['build:clean'], function(){
  return gulp.src(config.path.src + '/images/*')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(config.path.dest + '/images'));
});

//Servers
gulp.task("server", function(){
  browserSync({server: config.path.src});
})
gulp.task("build:server", function(){
  browserSync({server: config.path.dest});
});

//Task for clean all folders and files in folder 'dist'
gulp.task("build:clean", function(){
  return gulp.src(config.path.dest + '**/*', {read: false})
    .pipe(clean());
});

// Task for copy all files from folder 'app' 
// except 'images'(handled on build task), 'js'(handled on build task), 'css'(handled on build task), 'sass' (not needed in dist)
gulp.task("build:copy", ['build:clean'], function(){
  var exclude = [
    '!'+ config.path.src + '/images{,/**/*}',
    '!'+ config.path.src + '/sass{,/**/*}',
    '!'+ config.path.src + '/js{,/**/*}',
    '!'+ config.path.src + '/css{,/**/*}'
  ],
    include =  [
    config.path.src + '/**/*'
  ],
    copy = include.concat(exclude);
  return gulp.src(copy)
    .pipe(gulp.dest(config.path.dest, { base: '.' }));
});

gulp.task('watch', function(){
  gulp.watch(config.path.src + '/*.html', ['html']);
  gulp.watch(config.path.src + '/sass/**/*.scss', ['sass']);
  gulp.watch(config.path.src + '/js/**/*.js', ['scripts']);
});

gulp.task('build', ['build:clean', 'build:copy', 'build:sass', 'build:scripts', 'build:images', 'build:server']);
gulp.task('dev', ['sass', 'jshint', 'scripts', 'server', 'watch']);