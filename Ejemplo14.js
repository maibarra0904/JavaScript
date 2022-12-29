const d =  document;

//Se programa la función de validacion del formulario de contacto
export default function contactFormValidations() {
    const $form = d.querySelector(".contact-form"), //Se llama el objeto de clase contact-form
    $inputs = d.querySelectorAll(".contact-form [required]"); //Se llaman todos los elementos de subclase required
                                                //Es necesario dejar el espacio antes de required

    console.log($inputs);

    $inputs.forEach((input) => { //para cada elemento de subclase required
        const $span = d.createElement("span"); //crea un nuevo elemento de mensaje auxiliar "span"
        $span.id = input.name; //Al nuevo elemento colocale el nombre del id del elemento de la subclase
        $span.textContent = input.title; //Agregale como texto el mismo título (que es el mensaje de error)
        $span.classList.add("contact-form-error","none"); //Agregale las 2 subclases
        input.insertAdjacentElement("afterend", $span);//Al elemento de la subclase required insertale inmediatamente después el mensaje auxiliar

    });
    
    //Programación de la escucha del documento cuando una tecla es presionada y levantada
    d.addEventListener("keyup", (e) => {
        if(e.target.matches(".contact-form [required]")) { //Si ocurre el evento y el elemento concuerda con uno del formulario contact form de subclase required
            let $input = e.target, //Llama las propiedades del elemento en cuestión
            pattern = $input.pattern || $input.dataset.pattern; //Llama su mecanismo individual de validación

            console.log($input);
            if(pattern && $input.value!==""){ //Siempre que exista un mecanismo de validación del elemento y este no esté vacío
                let regex = new RegExp(pattern); //Crea una nueva expresión regular a partir del mecanismo de validación
                // Ver como funciona el prototipo Regex: https://devdocs.io/javascript/global_objects/regexp/exec
                return !regex.exec($input.value) //Verifica si la expresión regular no se cumple en el contenido del elemento en cuestión
                    ? d.getElementById($input.name).classList.add("is-active") // Si se cumple agregale la subclase is-active al elemento
                    : d.getElementById($input.name).classList.remove("is-active"); //Caso contrario remuevesela
            }
            if(!pattern){

            }

        }
    })
    
    //Programación de la escucha del boton enviar del formulario
    d.addEventListener("submit", e => {
        //e.preventDefault();
        alert("Enviando formulario");

        const $loader = d.querySelector(".contact-form-loader"), //Seleccionar el elemento loader (imagen de cargando)
        $response = d.querySelector(".contact-form-response"); //Seleccionar el elemento de mensaje de respuesta del html 

        $loader.classList.remove("none"); //Muestra el loader (Quitando la subclase none del loader)

        //Programa una espera de 3 segundos
        setTimeout(() => {
            $loader.classList.add("none"); //Quita el loader 
            $response.classList.remove("none"); //Muestra el mensaje de envío del formulario
            $form.reset(); //Resetea los campos del formulario
        }, 3000);

        setTimeout(() => {
            $response.classList.add("none"); //Luego de 3 segundo mas que el anterior (6 segundos en total), quita el mensaje de envío del formulario
        }, 6000);
    });

}