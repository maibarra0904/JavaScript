(() => {
    const xhr = new XMLHttpRequest(), //Paso 1: Instanciar el objeto XML
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    

    xhr.addEventListener("readystatechange",e => {
        if(xhr.readyState!==4) return;

        if(xhr.status>=200 && xhr.status< 300){

            let json = JSON.parse(xhr.responseText);

            console.log(xhr);
            console.log("exito");
            console.log(xhr.responseText);
            //$xhr.innerHTML = json;

            json.forEach( el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
                $fragment.appendChild($li);

            })

            $xhr.appendChild($fragment);
        }
        else {
            console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
        }); // Paso 2. Asignar los eventos

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // Paso 3. Abrir la peticion

    xhr.send(); //Paso 4. Enviar la peticion
}

)();

(() => {
    
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json)=> {
        json.forEach( el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
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

)();