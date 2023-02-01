// Diferencia del funcionamiento de una promesa sincrónica y asincrónica

const numero = 1; //registra "1: sincronico fecth", "2: asincronico fetch", "3: sincronico axios", "4: asincronico axios"

const tipo = numero === 1 ? "sincronico fetch" : numero === 2 ? "asincronico fetch" : 
numero === 3 ? "sincronico axios" : numero === 4 ? "asincronico axios" : "";

let direccion = "http://localhost:3500/santos";

const $fragment = document.createDocumentFragment(),
        $tipo = document.createElement("p"),
        $fetch = document.getElementById("fetch"),
        $axios = document.getElementById("axios"),
        boton = document.querySelector('#boton');




const promesa = async function () {
    $tipo.innerHTML = `Modo ${tipo}`;
    $fragment.appendChild($tipo);

    if(tipo === "sincronico fetch") {        

        //Las promesas tienen 3 valores:
        //Pending: No se ha cumplido ni rechazado (A la espera de alguna orden)
        //Fulfilled: Se cumplió la promesa
        //Rejected: Se ha rechazado o no se pudo cumplir la promesa
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
        getAll();
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
        
        getAll();
    }

}


boton.addEventListener('click', async () => {
    try {
        Notification.requestPermission()
            .then(resultado => console.log(`El resultado es: ${resultado}`));

        const proAsync = await promesa();
        try {proAsync()}
        catch (err) {
        };
        
    } catch (error) {
        console.error(error);
    }
})


if (Notification.permission === "granted") {
    new Notification("Título de la notificación", {
        icon: 'imagenes/icono.jpg',
        body: 'Este es la notificación',
    });
    
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        let notification = new Notification("Título de la notificación", {
            icon: 'imagenes/icono.jpg',
            body: 'Este es la notificación',
        });
      }
    });
  }


//Como ejecutar más de una promesa al mismo tiempo

function descargarPedidos() {
return new Promise(resolve => {
    console.log('Descargando pedidos... espere');

    setTimeout(() => {
        resolve('Pedidos Descargados')
    },1000)
})
}

function descargarClientes() {
return new Promise(resolve => {
    console.log('Descargando clientes... espere');

    setTimeout(() => {
        resolve('Clientes Descargados')
    },3000)
})
}

async function app() {
try {
    const resultado = await Promise.all([descargarPedidos(),descargarClientes()]);
    console.log(resultado[0]);
    console.log(resultado[1]);
} catch (err) {
    console.log(err);
}
}

app();
