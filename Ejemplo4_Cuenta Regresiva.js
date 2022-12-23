const d = document;


export function Countdown( id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id), //Llama a la división del html llamada "Countdown"
    CountdownDate = new Date(limitDate).getTime(); //Se le da formato a la fecha registrada para conteo regresivo
    
    let countdownTempo = setInterval(() => {
        let now = new Date(),   //Se crea una variable con la hora actual
        
        time = (new Date(CountdownDate) - now + 1000) / 1000, //Se define el tiempo restante como la diferencia de la fecha registrada con la fecha actual
        seconds = ('0' + Math.floor(time % 60)).slice(-2), //Se aplica algoritmo para obtener solo la hora del tiempo restante
        minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
        days = Math.floor(time / (3600 * 24));
        
        $countdown.innerHTML = `<h3> Faltan: ${days} días ${hours} horas ${minutes}
                minutos ${seconds} segundos</h3>`; //Se pinta la informacion del conteo regresivo
        //console.log(CountdownDate);

        //Se programa un mensaje para cuando el conteo regresivo llegue a cero
        if ( time<0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
        

    },1000);
}