import hamburgerMenu from "./Ejemplo1_Menu.js";

import { digitalClock,alarm } from "./Ejemplo2_Reloj.js";

import {moveBall,shortcutsall,shortcutssimp} from "./Ejemplo3_Teclado.js";
import { Countdown } from "./Ejemplo4_Cuenta Regresiva.js";
import darkTheme from "./Ejemplo5_Oscuro.js";



const d = document;

d.addEventListener("DOMContentLoaded", () => {
        hamburgerMenu(".panel-btn", ".panel",".menu a");
        digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
        alarm("sonidos/alarma.mp3","#activar-alarma","#desactivar-alarma");
        Countdown("Countdown","Apr 09, 2023 00:00:00","Felicidades");
        darkTheme(".dark-btn","dark-mode");
    });

//Metodo del teclado cuando presionamos la tecla
d.addEventListener("keydown",(e)=>{
    shortcutsall(e);
    shortcutssimp(e);
    moveBall(e,".ball",".stage");
});


//Metodo del teclado cuando soltamos la tecla
// d.addEventListener("keyup",(e)=>{
//     shortcutssimp(e);
// });

//Metodo del teclado cuando presionamos la tecla
d.addEventListener("keypress",(e)=>{
    shortcutssimp(e);
    
});