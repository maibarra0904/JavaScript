const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await axios.get("http://localhost:3000/santos"),
        json = await res.data;

        json.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".constellation").textContent = el.constelacion;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.constellation = el.constelacion;
            $template.querySelector(".delete").dataset.id = el.id;
            
            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        })

        $table.querySelector("tbody").appendChild($fragment);
    } catch (error) {
        let message = `Ocurrió un error: ${error}`;
    }
}


d.addEventListener("DOMContentLoaded",getAll);

d.addEventListener("submit", async e => {
    if(e.target === $form) {
        e.preventDefault(); //Desactivar el comportamiento por defecto para poder controlarlo

        if(!e.target.id.value){
            //Create - POST
            try{
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                }
                res = await fetch("http://localhost:3000/santos", options),
                json = await res.json();
                
                if(!res.ok) throw {status: res.status, statusText: res.statusText};
                //location.reload();
            }
            catch (err) {
                let message = err.statusText || "Ocurrio un error";
                //$form.insertAdjacentElement("afterend",`<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        } else {
            //Update - PUT
            try{
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                }
                res = await fetch(`http://localhost:3000/santos/${e.target.id.value}`, options),
                json = await res.json();
                
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

d.addEventListener("click", async e => {
    if(e.target.matches(".edit")){
        //alert("Editar");
        $title.textContent = "Editar Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }

    if(e.target.matches(".delete")){
        let isDelete = confirm(`Estas seguro de eliminar el Santo ${e.target.dataset.id}`);

        if(isDelete){
            try{
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    }
                }
                res = await fetch(`http://localhost:3000/santos/${e.target.dataset.id}`, options),
                json = await res.json();
                
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
