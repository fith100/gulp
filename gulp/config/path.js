// Получаем имя папки с проекта 
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './app/build'; /* Путь до папки с конечным результатом */
const srcFolder = './app/src'; /* Путь до папки с исходными файлами */




export const path = {
    // Обьект с путей с результатом
    build: {
        html: `${buildFolder}/`,
        style: `${buildFolder}/style/`,
        images: `${buildFolder}/images/`,
        js: `${buildFolder}/script/`,
        fonts: `${buildFolder}/fonts/`
    },
    //  обьект путей с исходым файлом
    src:{
        html: `${srcFolder}/*pug`, /* * - это маска. Для получения файлов с любым названием */
        style: `${srcFolder}/style/style.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpeg,gif,webp}`,
        js: `${srcFolder}/script/app.js`,
        fonts: `${srcFolder}/fonts/*.{ttf,otf}`
    },
    // обьект путей к файлам и папкам за которыми нужно следить
    watch:{
        html: `${srcFolder}/**/*.pug`,
        style: `${srcFolder}/style/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpeg,gif,webp}`,
        js: `${srcFolder}/script/**/*.js`
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder
}