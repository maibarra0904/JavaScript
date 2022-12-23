
const d = document,
 l=localStorage; // Se crea variable para simplificar la expresion de almacenamiento local

 //Funcion donde se programa el boton oscuro para ello se solicitan dos parametros:
 //El boton que permite pintar el fondo oscuro y la subclase que se agregara a la clase original (programada en css)
export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn), //Se llama al objeto boton
    $selector = d.querySelectorAll("[data-darks]"); //Se seleccionan los objetos de la subclase
    
    console.log($selector);

    let moon = "🌙", //Se definen los iconos para el boton en modo claro y oscuro
        sun = "☀️";

    //Se programa el modo claro
    const lightMode = () => {
        $selector.forEach(el => el.classList.remove(classDark)); //Se elimina la subclase oscura en todos los elementos de la clase original (claro)
        $themeBtn.textContent = moon; //Se cambia el icono de modo claro a modo oscuro
        l.setItem("theme", "light"); //Se registra "light" en la variable "theme" del localstorage 
    };
    
    //Se programa el modo oscuro
    const darkMode = () => {
        $selector.forEach(el => el.classList.add(classDark)); //Se agrega la subclase oscura en todos los elementos de la clase original (claro)
        $themeBtn.textContent = sun; //Se cambia el icono de modo oscuro a modo claro
        l.setItem("theme", "dark"); //Se registra "dark" en la variable "theme" del localstorage
    };

    //Se programa el boton claro/oscuro
    d.addEventListener("click", (e) => { //Al hacer click en algun lugar del html haz lo siguiente
        if (e.target.matches(btn)) { //Si el click se lo hace en el boton
            if ($themeBtn.textContent === moon) { //Si el texto del boton coincide con el modo oscuro
                darkMode(); //Aplica el modo oscuro
            }
            else {  //Caso contrario
                lightMode(); //Aplica el modo claro
            }

        }
    });

    //Programacion para conservar el ultimo modo generado (sea claro u oscuro)

    d.addEventListener("DOMContentLoaded", () => { //A la carga del sitio haz lo siguiente
        if(l.getItem("theme") === null) l.setItem("theme","light"); //Si no esta disponible la propiedad "theme" manten el modo claro
        if(l.getItem("theme") === "light") lightMode(); //Si la propiedad "theme" del localstorage es "light" aplica el modo claro
        if(l.getItem("theme") === "dark") darkMode(); //Si la propiedad "theme" del localstorage es "dark" aplica el modo oscuro
    });
}