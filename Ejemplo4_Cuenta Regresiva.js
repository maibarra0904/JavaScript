const d = document;


export function Countdown( id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id),
    CountdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date(),
        time = (new Date(CountdownDate) - now + 1000) / 1000,
        seconds = ('0' + Math.floor(time % 60)).slice(-2),
        minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
        days = Math.floor(time / (3600 * 24));
        
        $countdown.innerHTML = `<h3> Faltan: ${days} días ${hours} horas ${minutes}
                minutos ${seconds} segundos</h3>`;
        console.log(CountdownDate);

        if ( time<0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }


    },1000);
}