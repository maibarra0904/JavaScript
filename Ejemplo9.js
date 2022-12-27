const d = document,
w= window,
n = navigator,
ua = n.userAgent;

//Funcion para insertar la camara web en el navegador

export default function webCam(id) {
    const $video = d.getElementById(id);

    //Si identifica un dispositivo de camara o microfono haz lo siguiente
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
                    .getUserMedia({video:{ width: 720, height: 480 }, audio:false}) //Se especifica el tamaño del video a mostrar
                    //Las especificaciones del video pudieren variar dependiendo del dispositivo u otras preferencias
                    //ver: https://devdocs.io/dom/mediadevices/getusermedia
                    .then((stream) =>{
                        console.log(stream);
                        $video.srcObject = stream; //Se inserta el objeto video de la cámara en el html
                        $video.play(); //Se ejecuta el video
                    })
                    .catch((err)=>{ //Se programa el error en caso de haber
                        $video.insertAdjacentElement("afterend",`<p>,<mark>${err}</mark> </p>`);
                        console.log("Hay este error: " + err);
                    });
                    
    };
};