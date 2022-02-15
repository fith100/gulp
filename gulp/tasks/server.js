export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`  /* Базовая папка откуда нужно запустить файл */
        },
        notify: false, /* Сообщения в браузере */ 
        port: 3000
    })
}