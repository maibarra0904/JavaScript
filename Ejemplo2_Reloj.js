const d = document;

//Programación de función para los botones Iniciar y Detener Reloj

export function digitalClock(clock,play,stop){
    let Tiempo;
    d.addEventListener("click", e => {      
        //Programación cuando se presiona el botón "Iniciar Reloj"
        if(e.target.matches(play)){
            //Se crea una espera de 1 segundo para agregar la hora luego de pulsar el botón
            Tiempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString(); // Se llama la fecha actual en formato adecuado
                d.querySelector(clock).innerHTML =`<h3>${clockHour}</h3>`; // Se inserta el reloj en HTML
            },1000);

            e.target.disabled = true; // Se inhabilita el botón
        }

        //Programación cuando se presiona el botón "Detener Reloj"
        if(e.target.matches(stop)){
            clearInterval(Tiempo); //Se elimina la hora
            d.querySelector(clock).innerHTML = null; //Se borra el reloj del html
            d.querySelector(play).disabled = false; //Se habilita nuevamente el botón "Iniciar Reloj"
        }

    });
}

//Programación de función para los botones Iniciar y Detener Alarma

export function alarm(sound, play, stop) {

    let alarm;
    const $alarma = d.createElement("audio"); //Se crea un nuevo elemento
    $alarma.src = sound; //Se le asigna el archivo de audio a la alarma

    d.addEventListener("click", (e) => {
        //Se programa el botón "Iniciar Alarma"
        if(e.target.matches(play)){
            //Se crea una espera de 1 segundo y se activa el sonido de la alarma
            alarm = setTimeout(() => {
                $alarma.play();
            },1000);
            //Se deshabilita el botón
            e.target.disabled = true;
        }

        //Se programa el botón "Detener Alarma"
        if(e.target.matches(stop)){
            clearTimeout(alarm);
            $alarma.pause(); //Se para el sonido de la alarma
            $alarma.currentTime = 0;
            d.querySelector(play).disabled = false; //Se habilita el botón "Iniciar Alarma" nuevamente
        }

    })

}