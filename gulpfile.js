function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask

const gulp     = require('gulp')
const njk      = require('gulp-nunjucks-render')

function render() {
  return gulp.src( "index.html" )
    .pipe(njk({
      path: 'templates/'
    }))
    .pipe( gulp.dest('dist/') )
}

exports.html = render