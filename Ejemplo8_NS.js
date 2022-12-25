const d = document,
w= window,
n = navigator,
ua = n.userAgent;

//Función para identificar el status del acceso a internet
export default function networkStatus(){
    //Programación del estado "en línea" a través de una función anónima
    const isOnline = () => {
        const $div = d.createElement('div'); //Se crea un objeto "div" dentro del html


        if(n.onLine){ //Si el navegador está online
            $div.textContent = "Conexion reestablecida"; //Agrega al objeto div este mensaje
            $div.classList.add("online"); //Añade la subclase online al objeto
            $div.classList.remove("offline"); //Quita la subclase offline al objeto
        }
        else {  //Haz todo lo contrario si detectas una conexión perdida
            $div.textContent = "Conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin",$div); //Inserta al comienzo del documento el objeto div
        setTimeout(() => { //Espera 2 segundos y elimina el objeto div (con el mensaje correspondiente)
            d.body.removeChild($div);
        }, 2000);


    };

    
    w.addEventListener("online", ()=> isOnline()); //Ejecuta la funcion anterior si el navegador se pone online
    w.addEventListener("offline", ()=> isOnline());//Ejecuta la funcion anterior si el navegador se pone offline
}