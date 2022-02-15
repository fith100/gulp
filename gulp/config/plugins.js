import plumber from 'gulp-plumber'; /* обработка ошибок */
import notify from 'gulp-notify'; /* Вывод сообщения */
import browsersync from 'browser-sync'; /* этот плагин для открытия браузера и перезагрузки */

// Экспорт обьект

export const plugins = {
    plumber,
    notify,
    browsersync
}