const {src, dest, watch} = require("gulp"); //Paso 1. Se llaman las propiedades src y dest del gulp
const gulpPlumber = require("gulp-plumber");
const sass = require('gulp-sass')(require('sass')); //Paso 2. Se conecta a gulp con sass a través de esta constante

//Paso 3: Se crea la función donde se aplicará gulp
function css(done) {
    
    //src('src/sass/app.scss')    //Paso 4. Se identifica el archivo donde está css
    src('src/sass/**/*.scss') // Los asteriscos permiten ubicar todos los archivos dentro del proyecto
        .pipe(gulpPlumber())
        .pipe(sass())           //Paso 5. Se llama a la conexión de gulp con sass
        .pipe(dest("build/css")); //Paso 6. Se ubica la carpeta donde se aplicarán los cambios
    done();
}

//Función que permite estár a la escucha de cambios de gulp
function dev(done) {
    //watch('src/sass/app.scss',css);
    watch('src/sass/**/*.scss',css);
    done();
}

function tarea(done) {
    console.log("Mi primer tarea");
    done();
}

//Este es código de node.js
exports.tarea = tarea;

exports.css = css;
exports.dev = dev;

//Para mantener a la esucha de cambios se llama la función dev en la terminal:
//npx gulp dev