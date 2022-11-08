// Diferencia del funcionamiento de una promesa sincrónica y asincrónica

const tipo = "sincronico"; //registra "sincronico" o "asincronico"

(() => {
    console.log(tipo);
    const $tipo = document.createElement("p");
    $tipo.innerHTML = `Modo ${tipo}`;

    if(tipo === "sincronico") {
        const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();
    

        fetch("http://localhost:3500/santos")
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json)=> {
            console.log(json);
            $fragment.appendChild($tipo)
            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.nombre}`;
                $fragment.appendChild($li);

            })

            $fetch.appendChild($fragment);
            }
        )
        .catch(err => {
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => console.log("Esto se ejecuta de forma independiente"));
    } else if (tipo === "asincronico") {
        const getAll = async() => {
            try{
                const $fetch = document.getElementById("fetch"),
                $fragment = document.createDocumentFragment();
                $fragment.appendChild($tipo);
                let res = await fetch("http://localhost:3500/santos"),
                json = await res.json();
                console.log(json);
                json.forEach(el => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.nombre}`;
                    $fragment.appendChild($li);
                })
                $fetch.appendChild($fragment);
            }
            catch{
                let message = err.statusText || "Ocurrio un error";
                $fetch.innerHTML = `Error ${err.status}: ${message}`}
        }

        document.addEventListener("DOMContentLoaded", getAll);
    }

    
    
})()

