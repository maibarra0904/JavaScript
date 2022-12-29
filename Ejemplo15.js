const d = document,
w = window;

//Función para lectura de una texto escrito
export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select"), //Se llama a la lista desplegable
    $speechTextarea = d.getElementById("speech-text"), //Se llama a la caja donde se ubicara el texto
    $speechBtn = d.getElementById("speech-btn"),//Se llama al boton que permitirá ejecutar la lectura
    $speechBtnC = d.getElementById("clear-btn"), //Se llama al botón que borrará el texto de la caja
    //Ver como funciona el método SpeechSynthesisUtterance: https://devdocs.io/dom/speechsynthesisutterance
    speechMessage = new SpeechSynthesisUtterance();

    let voices = [];//Se crea variable con el fin de almacenar las voces disponibles

    //Se pone a la escucha la carga del documento
    d.addEventListener("DOMContentLoaded", e=> {
        //Ver el funcionamiento del evento voiceschanged: https://devdocs.io/dom/speechsynthesis/voiceschanged_event
        w.speechSynthesis.addEventListener("voiceschanged", e=>{ //Se pone a la escucha el evento voz
            voices = w.speechSynthesis.getVoices(); //Se llaman las voces disponibles en windows

            voices.forEach(voice => { //Por cada voz disponible
                const $option = d.createElement("option"); //Crea una nueva opción
                $option.value = voice.name; //Ponle como nombre el nombre de la voz
                $option.textContent = `${voice.name} /// ${voice.lang}`; //Agrega estos parámetros en la nueva opción

                $speechSelect.appendChild($option); //Agrega en la lista desplegable la opción anterior
            })
        })
    });


    d.addEventListener("change", e => {
        if(e.target === $speechSelect) { //Si hay alguna voz elegida en la lista desplegable
            speechMessage.voice = voices.find(voice => voice.name === e.target.value); //Configura el mensaje a hablar con esa voz
        }
    });

    //Se configura el evento click
    d.addEventListener("click", e => {
        if(e.target === $speechBtn) { //Si el click se da en el boton leer texto
            speechMessage.text = $speechTextarea.value; //Asigna el texto de la caja al mensaje que se va a leer
            w.speechSynthesis.speak(speechMessage); // lee el mensaje anterior
        }
        if(e.target === $speechBtnC) { //Si el click se da en el boton de borrar
            $speechTextarea.value = ""; //Borra el contenido de la caja de texto
        }
    });

}