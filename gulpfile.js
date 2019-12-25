const
 gulp  = require("gulp"),
 server = require("gulp-server-livereload"),
 cssmin = require('gulp-cssmin'),
 rename = require('gulp-rename'),
 cleanCSS = require('gulp-clean-css'),
 autoprefixer = require('gulp-autoprefixer'),
 csscomb = require('gulp-csscomb'),
 htmlmin = require('gulp-htmlmin'),
 uglify = require('gulp-uglify');
 pipeline = require('readable-stream').pipeline;
 imagemin = require('gulp-imagemin');
 print = require('gulp-print');

gulp.task("server", done => {
 gulp.src('./app')
 .pipe(server({
     livereload:true,
     directoryListing:{
         enable:true,
         path:'app'
     },
     open:false,
 }));
 done();
});

gulp.task('autoprefixer', () =>
    gulp.src('dist/style/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/style/style.css'))
);

gulp.task('css-comb', done => {
   gulp.src('dist/style/style.css')
    .pipe(csscomb())
    .pipe(gulp.dest('minify/style/'));
   done();
});

gulp.task('css-minify', done => {
    gulp.src('dist/style/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('minify/style/'));
   done();

});

gulp.task('html-minify', () => {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('minify/'));
});

gulp.task('minify-js', done => {
     return pipeline(
        gulp.src('dist/js/*.js'),
        uglify(),
        gulp.dest('minify/js/')
  );
});

gulp.task('minify-img', () =>
    gulp.src('./dist/img/**/*')
        .pipe(imagemin({verbose: true}))
        .pipe(gulp.dest('./minify/img/'))
);

gulp.task('minify', gulp.series( 'css-comb', 'css-minify', 'html-minify', 'minify-js', 'minify-img'))