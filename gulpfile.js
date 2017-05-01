var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
    // 将你的默认的任务代码放在这
});

gulp.task('browserSync', function () {
    browserSync.init({
        // proxy:'localhost',
        server: {
            baseDir: "./"
        },
        port: 9007,
        open: 'local',
        // https:true
    });

    gulp.watch(['./**'], browserSync.reload)
});

gulp.task("serve",["browserSync"]);