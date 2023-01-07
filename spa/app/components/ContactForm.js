export function ContactForm(){
    const d = document, 
    $form = d.createElement("form"), //Crea un formulario nuevo
    $styles = d.getElementById("dynamic-styles"); //Llama el apartado de estilos llamado "dinamic-styles"
    
    $form.classList.add("contact-form"); //Agrega la clase "contact-form" al formulario anterior

    //Agrega los siguientes estilos al formulario
    $styles.innerHTML = `
        .contact-form {
            --form-ok-color: green;
            --form-error-color: red;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
        }
        
        .contact-form >*{
            padding: 0.5rem;
            margin: 1rem auto;
            display: block;
            width: 100%;
        }
        
        .contact-form textarea {
            resize: none; /*Impide que el tamano del textarea sea modificable*/
        }
        
        .contact-form legend,
        .contact-form-response {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        
        /*Estandarizar el tamano y fuente de los inputs*/
        .contact-form input,
        .contact-form textarea {
            font-size: 1rem;
            font-family: sans-serif;
            cursor: text;
        }
        
        /*Especificacion para el botón*/
        
        .contact-form input[type="submit"]{
            width: 50%;
            font-weight: bold;
            cursor: pointer;
        }
        
        
        
        .contact-form [required]:valid {
            border: thin solid var(--form-ok-color);
        }
        
        .contact-form [required]:invalid {
            border: thin solid var(--form-error-color);
        }
        
        
        .contact-form-error {
            margin-top: -1rem;
            font-size: 80%;
            background-color: var(--form-error-color);
            color: #fff;
            transition: all 800ms ease;
        }
        
        .contact-form-error.is-active {
            display: block;
            animation: show-message 1s 1 normal 0s ease-out both;
        }
        
        .none {
            display: none;
        }
        
        @keyframes show-message {
            0% {
                visibility: hidden;
                opacity: 0;
            }
        
            100% {
                visibility: visible;
                opacity: 1;
            }
        }
    `;
    
    //Agrega el siguiente contenido al formulario
    $form.innerHTML = `
        <legend>Envíanos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre" title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
        <input type="email" name="email" placeholder="Escribe tu correo" title="Email incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
        <input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required>
        <textarea name="comments" title="Tu comentario no debe exceder los 255 caracteres" cols="50" rows="5" placeholder="Escribe tus comentarios" data-pattern="^.{1,255}$" required></textarea>
        <input type="submit" value="Enviar">
        <div class="contact-form-loader none">
            <img src="app/assets/loader.gif" alt="Cargando">
        </div>

        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
    `;
    
    //Función que permite realizar validaciones al formulario
    function validationsForm() {
        const $form = d.querySelector(".contact-form"), //Se llama al formulario
        $inputs = d.querySelectorAll(".contact-form [required]"); //Se llama todos los campos requeridos
        //Es necesario dejar el espacio antes de required en el código
        console.log($inputs);
        
        //Codificación para mostrar el mensaje de error en los campos requeridos del formulario
        $inputs.forEach((input) => { //En cada campo de uso requerido haz lo siguiente
            const $span = d.createElement("span"); //Crea un mensaje emergente
            $span.id = input.name; //Coloca al mensaje emergente un id
            $span.textContent = input.title; //Agrégale un título
            $span.classList.add("contact-form-error","none"); //Añádele la clase error
            input.insertAdjacentElement("afterend", $span); //Inserta el mensaje de error después del campo
    
        });
        
        //Programación de la escucha para mostrar los mensajes emergentes por
        //Errores de ingreso de información en los campos requeridos
        d.addEventListener("keyup", (e) => {
            if(e.target.matches(".contact-form [required]")) { //Si la tecla presionada coincide con un campo requerido haz lo siguiente
                let $input = e.target, //Guarda en una variable el campo donde se ha presionado la tecla
                pattern = $input.pattern || $input.dataset.pattern; //Llama a la llave de validación de ese campo
    
                console.log(pattern);
                if(pattern && $input.value!==""){ //Si el campo no está vacío (tiene contenido) y tiene llave de validación
                    let regex = new RegExp(pattern);//Convierte la llave de validación en un modelo de validación (Expresión Regular)
                    console.log(regex.exec($input.value));
                    return !regex.exec($input.value) //Si el modelo de validación no se cumple
                        ? d.getElementById($input.name).classList.add("is-active") //Agrega la clase "is-active" que activa el mensaje de error
                        : d.getElementById($input.name).classList.remove("is-active");//Caso contrario remueve esa clase (quita el mensaje de error)
                }
                if(!pattern){
    
                }
    
            }
        })
        
        //Programación del botón submit (enviar formulario)
        d.addEventListener("submit", e => {
            e.preventDefault();
            alert("Enviando formulario"); //Crea una alerta de envío de formulario

            const $loader = d.querySelector(".contact-form-loader"), //Llama al loader
            $response = d.querySelector(".contact-form-response"); //Llama al mensaje de respuesta

            $loader.classList.remove("none");//Muestra el loader (removiendo la clase "none")

            //Programación para ejecutar el envío del formulario
            fetch("https://formsubmit.co/ajax/fdc4e3c99710f9f612ff6d5da3b2b59c",{ //Haz la petición a la API de envío de formulario
                method: "POST", //Esta petición debe cumplir con los parámetros indicados en la documentación de la API
                body: new FormData(e.target) //En este caso solicita method y body de las formas especificadas
            })
            .then(res => res.ok ? res.json():Promise.reject(res)) //Si hay una respuesta conviertela a Json
            .then(json => {
                $loader.classList.add("none"); //Una vez cargada la respuesta quita el loader
                $response.classList.remove("none"); //Muestra el mensaje de respuesta
                $response.innerHTML = `<p>${json.message}</p>`; //Inserta el mensaje en el html
                $form.reset(); //Pon todos los casilleros del formulario en blanco (nuevamente)
            })
            .catch(err =>{
            })
            .finally(()=> setTimeout(()=>{
                $response.classList.add("none");
            },3000)) //Indistintamente de todo, quita el mensaje de respuesta al formulario a los 3 seg

        });
    
    }

    setTimeout(()=>validationsForm(),100); //Permite cargar dinamicamente el contenido dejando a un lado el conflicto con keyup

    return $form; //Retorna el formulario nuevamente
}