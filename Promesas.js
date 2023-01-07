// Diferencia del funcionamiento de una promesa sincrónica y asincrónica

const numero = 4; //registra "1: sincronico fecth", "2: asincronico fetch", "3: sincronico axios", "4: asincronico axios"

const tipo = numero === 1 ? "sincronico fetch" : numero === 2 ? "asincronico fetch" : 
numero === 3 ? "sincronico axios" : numero === 4 ? "asincronico axios" : "";

let direccion = "http://localhost:3000/santos";

const $fragment = document.createDocumentFragment(),
        $tipo = document.createElement("p"),
        $fetch = document.getElementById("fetch"),
        $axios = document.getElementById("axios");

$tipo.innerHTML = `Modo ${tipo}`;
$fragment.appendChild($tipo);




(() => {
    console.log(tipo);

    //Promesa Síncrona usando Fetch

    if(tipo === "sincronico fetch") {        

        fetch(direccion)
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json)=> {
            console.log(json);
            
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
    } 
    
    //Promesa Asíncrona usando Fetch

    else if (tipo === "asincronico fetch") {
        const getAll = async() => {
            try{
                
                
                let res = await fetch(direccion),
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

    //Promesa Síncrona usando Axios

    else if (tipo ===  "sincronico axios"){
        axios.get(direccion) //Se puede leer el archivo JSON guardado en el equipo
        .then(
            (res) => {


                let json = res.data;
                
                json.forEach( (el) => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.nombre}`;
                    $fragment.appendChild($li);
                })

                $axios.appendChild($fragment);
                
            }
        )
        .catch(

        ).finally(
        );
    }

    //Promesa Asíncrona usando Axios

    else if (tipo ===  "asincronico axios") {
        const getAll = async () => {
            try {
                let res = await axios.get(direccion),
                json = await res.data;
        
                json.forEach(el => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.nombre}`;
                    $fragment.appendChild($li);
                })
                
                $axios.appendChild($fragment);
                
            } catch (error) {
                let message = `Ocurrió un error: ${error}`;
            }
        }
        
        
        document.addEventListener("DOMContentLoaded",getAll);
    }

    
    
})();

