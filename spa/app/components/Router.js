import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";


export async function Router() {
    
    const d = document,
    w=window,
    $main = d.getElementById("main");


    let { hash } = location;
    $main.innerHTML = null;
    
    if(!hash || hash === "#/"){
        await ajax ({
            url: api.POSTS,
            cbSuccess: (main) => {
                //console.log(main);
    
                let html = "";
    
                main.forEach((post) => (html += PostCard(post)));
                //d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            }
        })
    } else if (hash.includes("#/search")) {
        let query = localStorage.getItem("wpSearch");

        if(!query) {
            d.querySelector(".loader").style.display = "none";
            return false
        };

        await ajax ({
        
            
            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                console.log(search);
                let html = "";

                if(search.length === 0) {
                    html = `
                        <p class = "error">
                            No existen resultados de busqueda para el termino <mark>${query}</mark>
                        </p>
                    `
                } else {
                    search.forEach((post) => (html+=SearchCard(post)));
                };
                $main.innerHTML = html;
                
            }
        })
        
        //$main.innerHTML = `<h2>Seccion del Buscador</h2>`;
        //d.querySelector(".loader").style.display = "none";
    } else if (hash === "#/contact") {
        //$main.innerHTML = `<h2>Seccion de Contacto</h2>`;
        $main.appendChild(ContactForm());
        //d.querySelector(".loader").style.display = "none";
    } else {
        $main.innerHTML = `<h2>Aqui cargara el elemento del post previamente seleccionado</h2>`;
        //d.querySelector(".loader").style.display = "none";
        await ajax ({
        
            
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                console.log(post);
                
                $main.innerHTML = Post(post);
                
            }
        })
    }
    
    d.querySelector(".loader").style.display = "none";
}