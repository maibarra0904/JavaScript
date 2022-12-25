import getGeolocation from "./Ejemplo10.js";
import slider from "./Ejemplo11.js";
import scrollSpy from "./Ejemplo12.js";
import smartVideo from "./Ejemplo13.js";
import contactFormValidations from "./Ejemplo14.js";
import speechReader from "./Ejemplo15.js";
import hamburgerMenu from "./Ejemplo1_Menu.js";

import { digitalClock,alarm } from "./Ejemplo2_Reloj.js";

import {moveBall,shortcutsall,shortcutssimp} from "./Ejemplo3_Teclado.js";
import { Countdown } from "./Ejemplo4_Cuenta Regresiva.js";
import darkTheme from "./Ejemplo5_Oscuro.js";
import responsiveMedia from "./Ejemplo6_Responsive.js";
import responsiveTester from "./Ejemplo7.js";
import userDevicelnfo from "./Ejemplo8.js";
import networkStatus from "./Ejemplo8_NS.js";
import webCam from "./Ejemplo9.js";


const d = document;

d.addEventListener("DOMContentLoaded", () => {
        hamburgerMenu(".panel-btn", ".panel",".menu a");
        digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
        alarm("sonidos/alarma.mp3","#activar-alarma","#desactivar-alarma");
        //Countdown("Countdown","Apr 09, 2023 00:00:00","Felicidades"); //Ejemplo 4
        responsiveMedia("Youtube", "(min-width: 768px)",`<a href="https://www.youtube.com/watch?v=u9IMgIT1A6M" target="_blank"
        rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/u9IMgIT1A6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        responsiveMedia("Map", "(min-width: 768px)",`<a href="https://goo.gl/maps/bzuPA1mCfpqCkLV97" target="_blank"
        rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.797848403771!2d-78.47328118475889!3d-0.18354423547017534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d591ecf0995281%3A0xcf40cb5e608498b3!2sCentro%20del%20mundo%20(Ecuador)!5e0!3m2!1ses-419!2sec!4v1664912704324!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
        responsiveTester("Responsive tester"); // Ejemplo 7
        userDevicelnfo("user-device"); // Ejemplo 8
        networkStatus();  // Identifica si el sitio esta o no en linea
        //webCam("webcam"); // Detecta camara web - Ejemplo 9
        getGeolocation("geolocation"); //Verifica la ubicación - Ejemplo 10
        slider();
        scrollSpy();
        smartVideo();
        //contactFormValidations();
    });

darkTheme(".dark-btn","dark-mode"); // Sale del DOMContentLoaded porque esta siendo utilizada tambien en la funcion Ejemplo5_Oscuro
speechReader(); // Ejemplo 15


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
/*
d.addEventListener("keypress",(e)=>{
    shortcutssimp(e);
    
});
*/

