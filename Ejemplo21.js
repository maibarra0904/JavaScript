//Código a digitar en la terminal para abrir el servidor json
//json-server -w -p 3500 data/db.json

const d = document,
$table = d.querySelector(".crud-table"), //Llamar a la tabla crud
$form = d.querySelector(".crud-form"), //Llamar al formulario
$title = d.querySelector(".crud-title"), //Llamar el título
$template = d.getElementById("crud-template").content, //Llamar el contenido del template
$fragment = d.createDocumentFragment(); //Crear un nuevo fragmento

//Se crea la función para generar la petición AJAX
const ajax = ({url, method, success, error, data}) => {
    const xhr = new XMLHttpRequest(); //Se llama a la petición http

    xhr.addEventListener("readystatechange", e => { //Se pone a la escucha cuando hay cambios
        if(xhr.readyState !== 4 ) return; //Se asegura tener una respuesta para continuar

        if(xhr.status >=200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);
            success(json);  
        } else {
            let message = xhr.statusText  || "Ocurrio un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method || "GET", url); //Se toma la información de la API

    xhr.setRequestHeader("Content-type","application/json; charset=utf-8"); //Se formatea el contenido

    xhr.send(JSON.stringify(data)); //Se envía la petición en formato JSON

}//Función para llamar a todos los datos de la BD
const getAll = () => {
    ajax({
        method: "GET",
        url: "http://localhost:3500/santos", //Debe estar activo el servidor para ejecutar esto
        success: (res) => {
            res.forEach(el => { //Por cada elemento de la base de datos
                $template.querySelector(".name").textContent = el.nombre; //Agrega el nombre
                $template.querySelector(".constellation").textContent = el.constelacion; //La constelación
                $template.querySelector(".edit").dataset.id = el.id; //Agrega un botón con id
                $template.querySelector(".edit").dataset.name = el.nombre; //Le coloca el
                $template.querySelector(".edit").dataset.constellation = el.constelacion;
                $template.querySelector(".delete").dataset.id = el.id; //El botón eliminar

                let $clone = d.importNode($template, true); //Registra la información en el template (donde se mostrará la info)
                $fragment.appendChild($clone);//Crea un nuevo fragmento con el template anterior
            });
            console.log(res)

            $table.querySelector("tbody").appendChild($fragment); //Agrega el fragmento en el html
        },
        error: (err) => {
            $table.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`)    
            console.log(err)

            
        },
        data: null
        
    })
}

d.addEventListener("DOMContentLoaded", getAll); //Se pone a la escucha la función anterior

//Configuración del botón enviar
d.addEventListener("submit", e => {
    if(e.target === $form) { //Si el botón coincide con el de enviar
        e.preventDefault();

        if(!e.target.id.value){ //Si el registro no contiene id
            //Create - POST
            ajax({
                url: "http://localhost:3500/santos", //Selecciona la API
                method: "POST", //Crea un nuevo registro
                success: (res) => location.reload(),
                error: () => $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`), //Se inserta en el formulario un nuevo elemento
                data: {
                    nombre: e.target.nombre.value, //Se le agrega el nombre
                    constelacion: e.target.constelacion.value //Y la constelación
                }
            })
        } else {
            //Update - PUT
            ajax({
                url: `http://localhost:3500/santos/${e.target.id.value}`, //Se ubica el registro a través de la id
                method: "PUT", //Sirve para modificar el registro
                success: (res) => location.reload(),
                error: () => $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`),
                data: {
                    nombre: e.target.nombre.value, //Se coloca el nuevo nombre
                    constelacion: e.target.constelacion.value //Se coloca la nueva constelación
                }
            })

        }
    }
})

//Configuración del evento click
d.addEventListener("click", e => {
    //Si coincide con el botón editar
    if(e.target.matches(".edit")){
        //alert("Editar");
        $title.textContent = "Editar Santo"; //Cambia el título por "Editar Santo"
        $form.nombre.value = e.target.dataset.name; //Coloca en la caja de nombre el nombre
        $form.constelacion.value = e.target.dataset.constellation; //Colocan en la caja de constelación el nombre de la constelación
        $form.id.value = e.target.dataset.id; //Actualiza el id del formulario que coincida con el id del nombre
    }

    if(e.target.matches(".delete")){ //Si coincide con el botón borrar
        let isDelete = confirm(`Estas seguro de eliminar el Santo ${e.target.dataset.id}`); //Muestra una alerta para confirmar el borrado del registro

        if(isDelete){ //Si se confirma el borrado del registro
            ajax({
                url: `http://localhost:3500/santos/${e.target.dataset.id}`, //toma el registro con esa id
                method: "DELETE", //Bórralo
                success: (res) => location.reload(),
                error: () => alert(err),
            })
        }
    }
})