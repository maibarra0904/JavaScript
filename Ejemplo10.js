const d = document,
w= window,
n = navigator,
ua = n.userAgent;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy:true,
            timeout: 5000,
            maximumAge: 0,
        };

    const success = (position) => {
        let coords = position.coords;

        $id.innerHTML = `
            <p>Tu posicion actual es:</p>
            <ul> 
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b> metros</li>
            </ul>
        `;

        console.log(position);
    };

    const error = (err) => {
        console.log(err);
    };

    n.geolocation.getCurrentPosition(success,error,options);
}