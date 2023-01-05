const d = document,
w = window,
$site = d.getElementById("site"), //Se llama al área del título del sitio y su vínculo
$posts = d.getElementById("posts"), //Se llama la sección donde irán todos los posts
$loader = d.querySelector(".loader"), //Se llama al loader
$template = d.getElementById("post-template").content, //Se llama al contenido de una plantilla creada en html
$fragment = d.createDocumentFragment(),//Se crea un fragmento para agregar cada plantilla como un post
DOMAIN = "https://css-tricks.com/",
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
POSTS = `${API_WP}/posts?_embed`,
PAGES = `${API_WP}/pages`,
CATEGORIES = `${API_WP}/categories`;

let page = 1, //Número de página inicial
perPage = 5; //Número de posts por página (recargada)

/*
fetch(CATEGORIES)
.then(res => res.ok ? res.json(): Promise.reject(res))
.then(json => {
    console.log(json);
})
*/

//Se crea la función para colocar el título, descripción y vínculo de la página oficial
function getSiteData(){
    fetch(SITE)
    .then(res => res.ok ? res.json(): Promise.reject(res)) //Se convierte la respuesta en formato Json
    .then(json => {
        console.log(json);
        $site.innerHTML = `
        <h3>Sitio Web</h3>
        <h2>
            <a href="${json.url}" target="_blank">${json.name}</a>
        </h2>
        <p>${json.description}</p>
        <p></p>
        `//Se insertan el título del sitio, su descripción y el vínculo al sitio en el área correspondiente
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $site.innerHTML = `Error ${err.status}: ${message}`;
    })
}

//Función para llamar los posts contenidos en el sitio y agregarlos al html (no recibe parámetros)

function getPosts(){
    $loader.style.display = "block"; //Presenta el loader hasta que la información sea cargada
    fetch(`${POSTS}&page=${page}&per_page=${perPage}`) //Hace la petición del post 1 al 5 de la página oficial
    .then(res => res.ok ? res.json(): Promise.reject(res)) //Si la respuesta existe la convierte a formato Json
    .then(json => {
        console.log(json);
        
        json.forEach(el => { //Por cada post encontrado haz lo siguiente

            let categories = "", //Variable para almacenar las categorías de cada post
            tags = ""; //Variable para almacenar las etiquetas de cada post

            el._embedded["wp:term"][0].forEach(el=>categories+=`<li>${el.name}</li>`); //Agrega todas las categorías que encuentres en el mismo post
            el._embedded["wp:term"][1].forEach(el=>tags+=`<li>${el.name}</li>`);//Agrega todas las etiquetas que encuentres en el mismo post
            //Si existe una imagen agrégala caso contrario muestra la que se registra por defecto
            $template.querySelector(".post-image").src = el._embedded["wp:featuredmedia"] ? el._embedded["wp:featuredmedia"][0].source_url : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
            //Colócale un título a la imagen
            $template.querySelector(".post-image").alt = el.title.rendered;
            //Inserta en la plantilla el título del artículo
            $template.querySelector(".post-title").innerHTML = el.title.rendered;
            //Inserta ahora en la misma plantilla el nombre y la imagen del autor
            $template.querySelector(".post-author").innerHTML = `
                <img src="${el._embedded.author[0].avatar_urls["48"]}" alt="${el._embedded.author[0].name}">
                <figcaption>${el._embedded.author[0].name}</figcaption>

            `;
            //Inserta la fecha en la misma plantilla
            $template.querySelector(".post-date").innerHTML = new Date(el.date).toLocaleString();
            //Coloca sobre el título, el enlace al sitio oficial de donde se obtiene la info
            $template.querySelector(".post-link").href = el.link;
            //Deja al final de cada artículo solo los puntos suspensivos (esta acción quita los corchetes)
            $template.querySelector(".post-excerpt").innerHTML = el.excerpt.rendered.replace("[&hellip;]","...");
            //Inserta las categorías en la plantilla
            $template.querySelector(".post-categories").innerHTML = `
                <p>Categorías:</p>
                <ul>${categories}</ul>
            `;
            //Inserta las etiquetas en la plantilla
            $template.querySelector(".post-tags").innerHTML = `
                <p>Etiquetas:</p>
                <ul>${tags}</ul>
            `;
            //Inserta el contenido a la plantilla (parte oculta programada en css)
            $template.querySelector(".post-content > article").innerHTML = el.content.rendered; 

            //Agrega el post creado en la plantilla como un nodo al fragmento creado.
            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        })

        $posts.appendChild($fragment);
        $loader.style.display = "none";
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $posts.innerHTML = `Error ${err.status}: ${message}`;
        $loader.style.display = "none";
    })
    
}

//Cuando se actualice el documento html, carga el área de título y los posts
d.addEventListener("DOMContentLoaded", e=> {
    getSiteData();
    getPosts();
})

//Programación para ir cargando los sitios de a poco
w.addEventListener("scroll", e => {
    const {scrollTop,clientHeight,scrollHeight} = d.documentElement;

    if(scrollTop+clientHeight>=scrollHeight){ //Cuando la posición actual sumada a la altura de la página coincidan con el final de los posts

        page++; //Incrementa la paginación

        getPosts(); //Aplica la función de presentación de posts
    }

});