import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueris from 'gulp-group-css-media-queries';/* Групировка media запрос */
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css'; /* сжатие css файлов */
import rename from 'gulp-rename'; /* для измерения названия файла */


const sass = gulpSass (dartSass);

export const style = () => {
    return app.gulp.src(app.path.src.style, {sourcemaps: true}) /* Чтобы видеть ошибки . карта исходников */
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message%>"
    })))
    .pipe(sass ({
        outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueris())
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserList: ["last 3 versions"], /* поддержка версий браузеров */
        cascade: true
    }))

    .pipe(cleanCss())
    .pipe(rename({
     extname: ".min.css"   
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browsersync.stream())
}