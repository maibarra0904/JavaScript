const d = document,
w = window;

//Función de reproducción de video inteligente
export default function smartVideo (){
    //const $videos = d.querySelectorAll('video[data-smart-video]'); //Seleccionar el objeto de video del html

    const cb = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){ //Cuando ocurre la observación
                entry.target.play(); //Se pone a correr el video
            } else {
                entry.target.pause(); //Caso contrario se pausa el video
            }
        })
    };

    const observer = new IntersectionObserver(cb,{threshold: 0.5});

    $videos.forEach(el => observer.observe(el)); //El recurso (en este caso video) que se observará
}