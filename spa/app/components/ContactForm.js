export function ContactForm(){
    const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");
    
    $form.classList.add("contact-form");

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

    function validationsForm() {
        const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]"); //Es necesario dejar el espacio antes de required
    
        console.log($inputs);
    
        $inputs.forEach((input) => {
            const $span = d.createElement("span");
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error","none");
            input.insertAdjacentElement("afterend", $span);
    
        });
        
        d.addEventListener("keyup", (e) => {
            if(e.target.matches(".contact-form [required]")) {
                let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
    
                console.log($input);
                if(pattern && $input.value!==""){
                    let regex = new RegExp(pattern);
                    return !regex.exec($input.value)
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active");
                }
                if(!pattern){
    
                }
    
            }
        })
        
        
        d.addEventListener("submit", e => {
            e.preventDefault();
            alert("Enviando formulario");

            const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");

            $loader.classList.remove("none");

            fetch("https://formsubmit.co/ajax/fdc4e3c99710f9f612ff6d5da3b2b59c",{
                method: "POST",
                body: new FormData(e.target)
            })
            .then(res => res.ok ? res.json():Promise.reject(res))
            .then(json => {
                $loader.classList.add("none");
                $response.classList.remove("none");
                $response.innerHTML = `<p>${json.message}</p>`;
                $form.reset();
            })
            .catch(err =>{
            })
            .finally(()=> setTimeout(()=>{
                $response.classList.add("none");
            },3000))

        });
    
    }

    setTimeout(()=>validationsForm(),100); //Permite cargar dinamicamente el contenido dejando a un lado el conflicto con keyup

    return $form;
}