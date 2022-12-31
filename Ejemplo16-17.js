//Función anónima para tomar información de una API Json externa usando XMLHttpRequest
(() => {
    const xhr = new XMLHttpRequest(), //Paso 1: Instanciar el objeto XML
    $xhr = document.getElementById("xhr"), // Se llama al objeto donde se va a mostrar la información
    $fragment = document.createDocumentFragment(); //Se crea un nuevo fragmento (de información)

    
    
    xhr.addEventListener("readystatechange",e => {
        if(xhr.readyState!==4) return; // Si la información no está cargada aún, no hagas nada
        // Se verifica la carga de la info con el estado "4", vea: https://devdocs.io/dom/xmlhttprequest/readystate
        
        
        if(xhr.status>=200 && xhr.status< 300){ //Si el status de la información está sin errores
        //Ver documentación: https://devdocs.io/dom/xmlhttprequest/status
            let json = JSON.parse(xhr.responseText); //Convierte la respuesta a formato Json

            console.log(xhr);
            console.log("exito");
            console.log(xhr.responseText);
            //$xhr.innerHTML = json;

            json.forEach( el => { //Por cada elemento del objeto Json
                const $li = document.createElement("li"); //Crea una nueva linea con viñeta
                $li.innerHTML = `${el.name}---${el.email}---${el.phone}`; //Agrega a la linea anterior los parámetros nombre, email y teléfono
                $fragment.appendChild($li);//Inserta en el fragmento creado al comienzo esta línea con viñeta

            })

            $xhr.appendChild($fragment); //Agrega al fragmento con todas las lineas al objeto del html
        }
        else { //Programa la sentencia en caso de error
            console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
        }); // Paso 2. Asignar los eventos

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // Paso 3. Abrir la peticion

    xhr.send(); //Paso 4. Enviar la peticion
}
)();



//Función anónima para tomar información de una API Json externa usando Fetch
(() => {
    
    const $fetch = document.getElementById("fetch"), //Llama al objeto html donde estará la info
    $fragment = document.createDocumentFragment(); //Se crea un fragmento de información

    fetch("https://jsonplaceholder.typicode.com/users") //Se llama la petición fetch
    .then((res) => (res.ok ? res.json() : Promise.reject(res))) //Convierte la respuesta a formato JSON
    .then((json)=> {
        json.forEach( el => { //Por cada elemento del objeto JSON
            const $li = document.createElement("li"); //Crea una nueva linea con viñeta
            $li.innerHTML = `${el.name}---${el.email}---${el.phone}`; //Inserta info a la linea
            $fragment.appendChild($li); //Agrega la linea al fragmento creado anteriormente

        })

        $fetch.appendChild($fragment); //Añade el fragmento al objeto fetch creado originalmente
        }
    )
    .catch(err => { //Programa la respuesta en caso de error
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => console.log("Esto se ejecuta de forma independiente"));
}
)();