const d = document;

export function digitalClock(clock,play,stop){
    let Tiempo;
    d.addEventListener("click", e => {      

        if(e.target.matches(play)){
            Tiempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML =`<h3>${clockHour}</h3>`;
            },1000);

            e.target.disabled = true;
        }
        if(e.target.matches(stop)){
            clearInterval(Tiempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(play).disabled = false;
        }

    });
}

export function alarm(sound, play, stop) {

    let alarm;
    const $alarma = d.createElement("audio");
    $alarma.src = sound;

    d.addEventListener("click", (e) => {
        if(e.target.matches(play)){
            alarm = setTimeout(() => {
                $alarma.play();
            },1000);
            e.target.disabled = true;
        }

        if(e.target.matches(stop)){
            clearTimeout(alarm);
            $alarma.pause();
            $alarma.currentTime = 0;
            d.querySelector(play).disabled = false;
        }

    })

}