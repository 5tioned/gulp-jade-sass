var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

var config = {
   'jade' : {'pretty' : !false }
};
/**
* -----------------------------------------------------------------------------------------
* Gulp
* .task()
* .src()
* .dest()
* .watch()
* .start()
*------------------------------------------------------------------------------------------
*/

// Gulp 업무 등록
// gulp.task('업무이름', 업무를 처리할 함수);

gulp.task('default',['jade', 'sass', 'watch']);

/**
* -----------------------------------------------------------------------------------------
* Front-End Workflow Tasks
*------------------------------------------------------------------------------------------
*/
gulp.task('watch', function(){
   gulp.watch(['src/index.jade'], ['jade']);
   gulp.watch(['src/sass/style.scss'], ['sass']);
})

// Jade -> HTML
gulp.task('jade', function(){
   gulp.src('src/index.jade')
      .pipe( jade( config.jade ) )
      .pipe( gulp.dest('dist') );
});

gulp.task('sass', function(){
   gulp.src('src/sass/style.scss')
      .pipe( sass() )
      .pipe( gulp.dest('dist/sass') );
});

// /**
// * -----------------------------------------------------------------------------------------
// * Gulp
// * .task()
// * .src()
// * .dest()
// * .watch()
// * .start()
// *------------------------------------------------------------------------------------------
// */

// // Gulp 업무 등록
// // gulp.task('업무이름', 업무를 처리할 함수);

// gulp.task('default',[]);

// *
// * -----------------------------------------------------------------------------------------
// * Front-End Workflow Tasks
// *------------------------------------------------------------------------------------------

// // Jade -> HTML
// gulp.task('jade', function(){
// 	gulp.src('src/index.jade')
// 		.pipe( jade({ pretty: true }) )
// 		.pipe( gulp.dest('dist') );
// });



// // gulp.task('default', function() {
// //   console.log('Gulp Default task is start');
// //   gulp.start('eat:food');
// //   gulp.start('play-game');
// // });

// // gulp.task('eat:food', function() {
// //   console.log('show me the FOOD!');
// // });

// // gulp.task('play-game', function() {
// //   console.log('play the Game');
// // });