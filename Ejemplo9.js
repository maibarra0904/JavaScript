const d = document,
w= window,
n = navigator,
ua = n.userAgent;

export default function webCam(id) {
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
                    .getUserMedia({video:true, audio:false})
                    .then((stream) =>{
                        console.log(stream);
                        $video.srcObject = stream;
                        $video.play();
                    })
                    .catch((err)=>{
                        $video.insertAdjacentElement("afterend",`<p>,<mark>${err}</mark> </p>`);
                        console.log("Hay este error: " + err);
                    });
                    
    };
};