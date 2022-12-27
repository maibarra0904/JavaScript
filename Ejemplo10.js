const d = document,
w= window,
n = navigator,
ua = n.userAgent;

//Se programa la funcion de geolocalización
export default function getGeolocation(id){
    const $id = d.getElementById(id), //Se llama al objeto html
        options = {
            enableHighAccuracy:true,
            timeout: 5000,
            maximumAge: 0,
        };

    const success = (position) => {
        
        let coords = position.coords; //Se identifican las coordenadas

        //Se definen variables para convertir las coordenadas en números
        let latitudNum = parseFloat(coords.latitude.toString()),
        longitudNum = parseFloat(coords.longitude.toString()),
        coordNS, coordEW, grLat, minLat,secLat,grLon,minLon,secLon;

        //Se programan los parámetros asociados a Google Maps de la ubicación receptada:
        //Norte o Sur, Este u Oeste, y los grados minutos y segundos de latitud y longitud
        latitudNum>=0 ? coordNS = "N" : coordNS = "S";
        longitudNum>=0 ? coordEW = "E" : coordEW = "W";
        grLat = Math.abs(Math.trunc(latitudNum));
        minLat = Math.trunc((Math.abs(latitudNum) - grLat)*60);
        secLat = Math.trunc((((Math.abs(latitudNum) - grLat)*60)-minLat)*60);
        grLon = Math.abs(Math.trunc(longitudNum));
        minLon = Math.trunc((Math.abs(longitudNum) - grLon)*60);
        secLon = Math.trunc((((Math.abs(longitudNum) - grLon)*60)-minLon)*60);
        
        //console.log(latitudNum,coordNS,coordEW);
        
        //Se insertan en el html los datos de la ubicación
        $id.innerHTML = `
            <p>Tu posicion actual es:</p>
            <ul> 
                <li>Latitud: <b>${coords.latitude},${grLat},${minLat},${secLat}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b> metros</li>
            </ul>
            <div id="Youtube"><a href="https://www.google.com.ec/maps/place/${grLat}%C2%B0${minLat}'${secLat}%22${coordNS}+${grLon}%C2%B0${minLon}'${secLon}%22${coordEW}/@${latitudNum},${longitudNum},17z?hl=es" target="_blank"
                rel="noopener">Ver ubicación en Google Maps</a></div>
        `;

        //console.log(position);
    };

    const error = (err) => { //Se programa qué hacer en caso de error
        console.log(err);
    };

    n.geolocation.getCurrentPosition(success,error,options); // Se llama al método de geolocalización
    //Revisar el método getCurrentPosition en: https://devdocs.io/dom/geolocation/getcurrentposition
    
}