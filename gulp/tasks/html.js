// src() - получвет доступ к файлам и папкам по указаному аути 
// .pipe() - действие 
// dest() - результат файла в папку назвначения 

import pug from 'gulp-pug';
import versionNumber from 'gulp-version-number';

export const html = () => {
 return app.gulp.src(app.path.src.html)
 .pipe(app.plugins.plumber(app.plugins.notify.onError({
     title: "HTML",
     message: "Error: <%= error.message%>"
 })))
 .pipe(pug())
 .pipe(versionNumber({
     'version': '%DT%', /* Указываем текущую дату */
     'append': {
         'key': '_V',
         'cover': 0,
         'to': ['css', 'js']
     },
     'output': {
         'file': 'gulp/version.json' /* тут хранятся ключи */
     }
 }))
 .pipe(app.gulp.dest(app.path.build.html))
 .pipe(app.plugins.browsersync.stream())
 
}