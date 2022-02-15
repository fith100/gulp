import webpackStream from "webpack-stream";



export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: true})
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message%>"
    })))
    .pipe(webpackStream({
        mode: 'development', /* режим разработчика */
        output: {
            filename: 'app.min.js' /* файл результата */
        }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}