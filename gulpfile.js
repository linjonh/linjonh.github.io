var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// 定义 browserSync 任务
function browserSyncTask(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 9006,
        open: 'local'
    });

    gulp.watch(['./**']).on('change', browserSync.reload);
    done();
}

// 默认任务
gulp.task('default', gulp.series(browserSyncTask));