
const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();


//Función para importar la data al html
const getAll = async() => {
    try{
        let res = await fetch("http://localhost:3000/santos"), //Llamada al servidor local
        json = await res.json(); //Convertir la respuesta a Json

        if(!res.ok) throw {status: res.status, statusText: res.statusText}; //Verificación de la respuesta

        console.log(json);

        json.forEach(el => { //por cada respuesta
            $template.querySelector(".name").textContent = el.nombre; //Agrégale nombre al template
            $template.querySelector(".constellation").textContent = el.constelacion; //Agregale constelación al template
            $template.querySelector(".edit").dataset.id = el.id; //Asignale un id al botón editar
            $template.querySelector(".edit").dataset.name = el.nombre;//Agrégale nombre al botón de editar
            $template.querySelector(".edit").dataset.constellation = el.constelacion;//Agrégale la constelación al botón editar
            $template.querySelector(".delete").dataset.id = el.id;//Asignale un id al botón eliminar
            
            let $clone = d.importNode($template,true);//Importa el template al documento
            $fragment.appendChild($clone); //Agrega los datos del template al fragmento (ya con datos)
        })

        $table.querySelector("tbody").appendChild($fragment); //Agrega el fragmento al html

    } catch(err){
        let message = err.statusText || "Ocurrio un error";
        $table.insertAdjacentElement("afterend",`<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}

d.addEventListener("DOMContentLoaded", getAll); //Pon a la escucha la función anterior

//Función para programar el evento submit.
d.addEventListener("submit", async e => {
    if(e.target === $form) { //Si el botón de enviar pertenece al formulario de inicio
        e.preventDefault(); //Desactivar el comportamiento por defecto para poder controlarlo

        if(!e.target.id.value){ //Si el formulario no tiene id (modo Agregar Santo)
            //Create - POST
            try{
                let options = { //Variable para la creación de nuevo registro con nombre y constelación
                    method: "POST",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                }
                res = await fetch("http://localhost:3000/santos", options), //Llama al la data considerando la creación del nuevo registro
                json = await res.json(); //Convierte la respuesta anterior a Json
                
                if(!res.ok) throw {status: res.status, statusText: res.statusText};
                //location.reload();
            }
            catch (err) {
                let message = err.statusText || "Ocurrio un error";
                //$form.insertAdjacentElement("afterend",`<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        } else { //Si el formulario si tiene id (modo edición)
            //Update - PUT
            try{
                let options = { //Variable para actualizar un registro existente
                    method: "PUT",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                }
                res = await fetch(`http://localhost:3000/santos/${e.target.id.value}`, options), //Modifica el registro cuya id coincide con la base de datos existente
                json = await res.json(); //Convierte la respuesta a Json
                
                if(!res.ok) throw {status: res.status, statusText: res.statusText};
                //location.reload();
            }
            catch (err) {
                let message = "Ocurrio un error";
                //$form.insertAdjacentElement("afterend",`<p><b>Error ${err.status}: ${message}</b></p>`);
            }

        }
    }
})

//Configuración del click
d.addEventListener("click", async e => {
    if(e.target.matches(".edit")){ //Si coincide con el botón editar
        //alert("Editar");
        $title.textContent = "Editar Santo"; //Cambiale el título por default "Agregar Santo" por "Editar Santo"
        $form.nombre.value = e.target.dataset.name; //Asignale a la caja nombre, el nombre del santo correspondiente
        $form.constelacion.value = e.target.dataset.constellation;//Haz lo mismo anterior pero con la caja constelación
        $form.id.value = e.target.dataset.id; //Asignale el id del santo como id del formulario
    }

    if(e.target.matches(".delete")){ //Si coincide con el botón borrar
        let isDelete = confirm(`Estas seguro de eliminar el Santo ${e.target.dataset.id}`); //Presenta una caja de confirmación de borrado

        if(isDelete){ //Habiendo confirmado el borrado haz lo siguiente
            try{ 
                let options = { //Programa una variable que permita el borrado del registro
                    method: "DELETE",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    }
                }
                res = await fetch(`http://localhost:3000/santos/${e.target.dataset.id}`, options), //Ejecuta el borrado del registro con el id específico
                json = await res.json(); //Convierte la respuesta a Json
                
                if(!res.ok) throw {status: res.status, statusText: res.statusText};
                location.reload();
            }
            catch (err) {
                let message = "Ocurrio un error";
                //alert(err);
            }
        }
    }
})
