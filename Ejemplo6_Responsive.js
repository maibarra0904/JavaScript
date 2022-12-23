const d= document,
w = window;

//Esta funcion tiene como parametros el id del objeto del html, el tamaño que delimita y diferencia
//un dispositivo móvil de una pantalla de escritorio, el objeto que se presentará si se trata de móvil
//y finalmente el objeto que se presentará si se trata de pantalla de escritorio.

export default function responsiveMedia (id, mq, mobileContent, desktopContent) {

    let breakpoint = w.matchMedia(mq); //Se define el breakpoint que es el limite previamente fijado 
    //entre moviles y escritorio, y esto depende del tamaño de la ventana con su propiedad matchMedia
    
    //Se programa la escucha del breakpoint como una funcion constante
    const responsive = (e) =>{ //Llama al objeto breakpoint
        if (e.matches){ //La propiedad matches del objeto matchMedia coloca "true" si el tamaño
            // de la pantalla está por encima del límite y "false" si está por debajo
            d.getElementById(id).innerHTML = desktopContent; //Se inserta el contenido para escritorio
        } else {
            d.getElementById(id).innerHTML = mobileContent; //Se inserta el contenido para móviles
        //console.log(breakpoint, e.matches);
        }
        console.log(e);
    };

    
    breakpoint.addListener(responsive); //Se pone a la escucha lo anterior
}
