# Gulp Project Manual

## get start

1.install gulp for project

```
$ npm install gulp --save-dev
```

2.create gulpfile.js on project root path for gulp configuration.
it's content look like this:
```js
var gulp = require('gulp');

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    //do some work
});
```
3.web app develop tool(browser-sync)
* "browser-sync@2.18.8" one of the local web service.
```npm
$ npm install browser-sync@2.18.8 --save-dev
```
* create browser-sync task
```js
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        // proxy:'localhost',
        server:{
            baseDir: "./work"
        },
        port:9006,
        open:'local',
        // https:true
    });

    gulp.watch(['./work/**'],reload)
});
```
