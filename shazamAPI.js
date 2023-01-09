import {options} from "./shazamKey.js";

const d = document,
$songs = d.getElementById("songs"), 
$template =d.getElementById("song-template").content, 
$fragment = d.createDocumentFragment(),
$form = d.getElementById("song-search"); 

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

                if(infoSongs.length === 0){ 
                    $songs.innerHTML = `<h2>No existen resultados de shows para el 
                        criterio de búsqueda: <mark>${query}</mark>
                    </h2>`
                } else { 
                    infoSongs.forEach(el => {
                        $template.querySelector("h3").textContent = el.track.title; 
                        $template.querySelector("img").src = el.track.images.coverart ? el.track.images.coverart
                        : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"; 
                        $template.querySelector("img").alt = el.track.title;
                        $template.querySelector("img").style.maxWidth = "80%"; 
                        $template.querySelector("a").href = el.track.url ? el.track.url: "#"; 
                        $template.querySelector("a").target = el.track.url ? "_blank": "_self";
                        $template.querySelector("a").innerHTML = el.track.url ? "<br>Ver letra": "";
                        
                        let $clone = d.importNode($template,true);
                        $fragment.appendChild($clone);
                    })
                    $songs.innerHTML = ""; 
                    $songs.appendChild($fragment); 
                    }
                }

                catch {
                    $songs.style.textAlign = "left";
                    $songs.innerHTML = `<p textalign = "left">No hay información para mostrar</p>`;
                }
            
            
        })
	.catch(err => console.error(err));

})


d.addEventListener("keypress", async e => {
    if(e.target.matches("#search")){ 
        if(e.keyCode===13){ 
            
            try {
                
                $shows.innerHTML = `<img class="loader" src="../imagenes/loader.gif" alt="Cargando...">`

                
                let query = e.target.value.toLowerCase(), 
                
                api = `https://api.tvmaze.com/search/shows?q=${query}`, 
                res = await fetch(api), 
                response = await res.response(); 
                

                if(!res.ok) throw {status: res.status, statusText: res.statusText}

                if(response.length === 0){ 
                    $shows.innerHTML = `<h2>No existen resultados de shows para el 
                        criterio de búsqueda: <mark>${query}</mark>
                    </h2>`
                } else { 
                    response.forEach(el => {
                        $template.querySelector("h3").textContent = el.show.name; 
                        $template.querySelector("div").innerHTML = el.show.summary ? el.show.summary:"Sin Descripción"; 
                        $template.querySelector("img").src = el.show.image ? el.show.image.medium
                        : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"; 
                        $template.querySelector("img").alt = el.show.name;
                        $template.querySelector("img").style.maxWidth = "80%"; 
                        $template.querySelector("a").href = el.show.url ? el.show.url: "#"; 
                        $template.querySelector("a").target = el.show.url ? "_blank": "_self";
                        $template.querySelector("a").innerHTML = el.show.url ? "<br>ver más...": "";

                        let $clone = d.importNode($template,true);
                        $fragment.appendChild($clone);
                    })
                    $shows.innerHTML = ""; 
                    $shows.appendChild($fragment); 
                }

            } catch (e){
                let message = err.statusText || "Ocurrió un error";
                $shows.innerHTML = `Error ${err.status}: ${message}`;
            }
        };
    }
})