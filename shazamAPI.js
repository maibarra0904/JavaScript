import {options} from "./shazamKey.js";

const d = document,
$songs = d.getElementById("songs"), //Se llama a la sección donde se presentarán los shows
$template =d.getElementById("song-template").content, //Se llama a la plantilla que se usará
//para presentar la información de cada show
$fragment = d.createDocumentFragment(),
$form = d.getElementById("song-search"); //Se crea un nuevo fragmento donde se colocarán todas las
//plantillas disponibles de la temática a buscar

$form.addEventListener("submit", e => {
    e.preventDefault();
    const artistName = $form.artist.value ? $form.artist.value : "";
    $songs.innerHTML = `<img class="loader" src="../imagenes/loader.gif" alt="Cargando...">`;
    fetch(`https://shazam.p.rapidapi.com/search?term=${artistName}&locale=en-US&offset=0&limit=20`, options)
        .then(response => response.json())
        .then(response => {
            
            try {
                $songs.style.textAlign = "center";
                const infoSongs  = response.tracks.hits;
                console.log(infoSongs);

                if(infoSongs.length === 0){ //Si la respuesta está vacía (no hay objetos para esa búsqueda)
                    $songs.innerHTML = `<h2>No existen resultados de shows para el 
                        criterio de búsqueda: <mark>${query}</mark>
                    </h2>`//Presenta este mensaje
                } else { //Caso contrario
                    infoSongs.forEach(el => {//Por cada elemento de la respuesta
                        $template.querySelector("h3").textContent = el.track.title; //Agrega en la plantilla el nombre
                        //$template.querySelector("div").innerHTML = el.show.summary ? el.show.summary:"Sin Descripción"; //Si existe alguna descripción agrégala, caso contrario indica que no hay descripción
                        $template.querySelector("img").src = el.track.images.coverart ? el.track.images.coverart
                        : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"; //Si existe una imagen en la respuesta agrégala, caso contrario agrega esta imagen por defecto
                        $template.querySelector("img").alt = el.track.title;//Colocale como titulo a la imagen, el nombre
                        $template.querySelector("img").style.maxWidth = "80%"; //Presenta de la imagen real el 80% del tamaño
                        $template.querySelector("a").href = el.track.url ? el.track.url: "#"; //Coloca como enlace la propiedad URL de la respuesta Json
                        $template.querySelector("a").target = el.track.url ? "_blank": "_self";//Si el URL del show existe, entonces preséntalo en una página nueva en blanco al dar el click
                        $template.querySelector("a").innerHTML = el.track.url ? "<br>Ver letra": "";//Pinta el texto "ver más..." siempre que haya la propiedad url
                        
                        let $clone = d.importNode($template,true);//Crea una variable donde repose la plantilla anterior a manera de nodo
                        $fragment.appendChild($clone);//Agrega al fragmento el nodo anterior
                    })
                    $songs.innerHTML = ""; //Borra en el área donde se mostrarán los shows todo el contenido anterior
                    $songs.appendChild($fragment); //Agrega el fragmento con todas las plantillas creadas
                    }
                }

                catch {
                    $songs.style.textAlign = "left";
                    $songs.innerHTML = `<p textalign = "left">No hay información para mostrar</p>`;
                }
            
            
        })
	.catch(err => console.error(err));

})



//Se programa la función de búsqueda a través del evento "keypress"
d.addEventListener("keypress", async e => {
    if(e.target.matches("#search")){ //Si el evento "keypress" coincide con la caja de búsqueda
        if(e.keyCode===13){ //Si la tecla presionada es "ënter"
            
            try {
                //Muestra el loader hasta que cargue la información
                $shows.innerHTML = `<img class="loader" src="../imagenes/loader.gif" alt="Cargando...">`

                //console.log(e.target.value);
                let query = e.target.value.toLowerCase(), //Convierte a letras minúsculas la información ingresada en la caja
                //Crea una variable con la información de los shows (acorde a documentación de API)
                api = `https://api.tvmaze.com/search/shows?q=${query}`, 
                res = await fetch(api), //Llama la información usando fetch
                response = await res.response(); //convierte la respuesta anterior a formato Json
                
                //console.log(api,res,response);

                if(!res.ok) throw {status: res.status, statusText: res.statusText}//Verifica que la respuesta existe

                if(response.length === 0){ //Si la respuesta está vacía (no hay objetos para esa búsqueda)
                    $shows.innerHTML = `<h2>No existen resultados de shows para el 
                        criterio de búsqueda: <mark>${query}</mark>
                    </h2>`//Presenta este mensaje
                } else { //Caso contrario
                    response.forEach(el => {//Por cada elemento de la respuesta
                        $template.querySelector("h3").textContent = el.show.name; //Agrega en la plantilla el nombre
                        $template.querySelector("div").innerHTML = el.show.summary ? el.show.summary:"Sin Descripción"; //Si existe alguna descripción agrégala, caso contrario indica que no hay descripción
                        $template.querySelector("img").src = el.show.image ? el.show.image.medium
                        : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"; //Si existe una imagen en la respuesta agrégala, caso contrario agrega esta imagen por defecto
                        $template.querySelector("img").alt = el.show.name;//Colocale como titulo a la imagen, el nombre
                        $template.querySelector("img").style.maxWidth = "80%"; //Presenta de la imagen real el 80% del tamaño
                        $template.querySelector("a").href = el.show.url ? el.show.url: "#"; //Coloca como enlace la propiedad URL de la respuesta Json
                        $template.querySelector("a").target = el.show.url ? "_blank": "_self";//Si el URL del show existe, entonces preséntalo en una página nueva en blanco al dar el click
                        $template.querySelector("a").innerHTML = el.show.url ? "<br>ver más...": "";//Pinta el texto "ver más..." siempre que haya la propiedad url

                        let $clone = d.importNode($template,true);//Crea una variable donde repose la plantilla anterior a manera de nodo
                        $fragment.appendChild($clone);//Agrega al fragmento el nodo anterior
                    })
                    $shows.innerHTML = ""; //Borra en el área donde se mostrarán los shows todo el contenido anterior
                    $shows.appendChild($fragment); //Agrega el fragmento con todas las plantillas creadas
                }

            } catch (e){
                let message = err.statusText || "Ocurrió un error";
                $shows.innerHTML = `Error ${err.status}: ${message}`;
            }
        };
    }
})