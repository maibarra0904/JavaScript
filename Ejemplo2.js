import hamburgerMenu from "./Ejemplo1_Menu.js";

import { digitalClock,alarm } from "./Ejemplo2_Reloj.js";


const d = document;

d.addEventListener("DOMContentLoaded", () => {
        hamburgerMenu(".panel-btn", ".panel",".menu a");
        digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
        alarm("sonidos/alarma.mp3","#activar-alarma","#desactivar-alarma");
    });
