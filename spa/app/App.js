import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/Router.js";

export function App(){
    /*
    document.getElementById("root").innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;
    console.log(api);
    ajax ({
        url: api.POSTS,
        cbSuccess: (posts) => {
            console.log(posts);
        }
    })

    ajax ({
        url: api.CATEGORIES,
        cbSuccess: (categories) => {
            console.log(categories);
        }
    })
    */

    const d = document,
    $root = d.getElementById("root");


    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Loader());
    $root.appendChild(Posts());
    
    Router();
    
}

