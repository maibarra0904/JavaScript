const d =  document,
$main = d.querySelector("main"), //Llamado a la sección donde aparecen las figuras de pokemones
$links = d.querySelector(".links"); //Llamado al área donde aparecen los botones next y prev

let maxPage = 10,//Cantidad de Pokemones a presentar en cada página
pokeAPI = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${maxPage}`; //Llamada a la API de pokemon 
//Nota.- La misma API llama una cantidad por default de 20 pokemones por página.

//Función para cargar las figuras y nombres de los pokemones con los botones next y previous
//tomando como parámetro la API
async function loadPokemons(url){
    try{
        //En primera instancia se carga el loader
        $main.innerHTML = `<img class="loader" src="../imagenes/loader.gif" alt="Cargando...">`;
        //Luego se hace la llamada a la API
        let res = await fetch(url),
        //Se convierte la llamada a la API en formato Json
        json = await res.json(),
        //Se crean variables para el template, y las imágenes que servirán como botones next y prev
        $template = "",
        $prevLink,
        $nextLink;

        console.log(json);
        //Se verifica que haya una respuesta de la API antes de continuar
        if(!res.ok) throw {status: res.status, statusText: res.statusText}

        
        for(let i=0;i<json.results.length;i++){ //Se llama la propiedad "results" de la API
            //Esta contiene la API individual (información) para cada pokemon
            //console.log(json.results[i]);
            try {
                let res = await fetch(json.results[i].url), //Se configura una nueva variable que llama 
                //a la propiedad "url" de cada pokemon de forma individual
                pokemon = await res.json(); //Se convierte la llamada anterior a formato Json
                    //console.log(res,pokemon);
                //Se verifica que exista una respuesta
                if(!res.ok) throw {status: res.status, statusText: res.statusText}

                //Se van agregando al template la figura del pokemon y su nombre
                //Esto es posible gracias a que en la API de cada pokemon individual, su imagen
                //está dentro de la propiedad "front_default" incluida dentro de "sprites"
                //el nombre por su parte está directamente en la propiedad "name"
                $template += `<figure>
                                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                                <figcaption>${pokemon.name}</figcaption>
                            </figure>`;

            } catch (e) {
                let message = e.statusText || "Ocurrió un error";
                $template += `<figure>
                    <figcaption>Error ${e.status}: ${message}</figcaption>
                </figure>`;
            }
        }

        $main.innerHTML = $template; //Se pinta el template en el área correspondiente
        $prevLink = json.previous ? `<a href="${json.previous}">⬅️</a>`:"";//Se configura que
        //en caso de que la API respectiva tenga la propiedad "previous" se muestre el logo
        //y tome esa información (vínculo) como enlace
        $nextLink = json.next ? `<a href="${json.next}">➡️</a>`:"";//Lo mismo para el logo next
        $links.innerHTML = $prevLink+" "+$nextLink;//Se pinta el o los logos en el html
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $main.innerHTML = `Error ${err.status}: ${message}`;
    }
}

d.addEventListener("DOMContentLoaded",e => loadPokemons(pokeAPI)); //Se pone a la escucha la función
//anterior para la API de pokemones respectiva

//Se programa la escucha al evento click
d.addEventListener("click", e=> {
    if(e.target.matches(".links a")) { //Si el click coincide con uno de los apartados que pertenecen
                                        //al área de logos que funcionan como click
        e.preventDefault(); //Se quiten las funciones por defecto
        loadPokemons(e.target.getAttribute("href")); //Se ejecute el vínculo del logo donde se ha hecho el click
    }
})