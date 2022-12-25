const d = document;

//Funcion que permite programar el contenido de un formulario, recibiendo como parámetro
//al formulario en cuestión
export default function responsiveTester(form){
    const $form = d.getElementById(form); //Se llama al formulario
    let tester;

    //Se programa el botón de nombre "probar" type "submit" que es quien envía el formulario
    d.addEventListener('submit',(e) => {
        if(e.target === $form) { //Si el boton de envío coincide con el del formulario del html
            e.preventDefault(); //Elimina el comportamiento por default del boton
            tester = window.open($form.direccion.value, "tester", `innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`);
            //Abre una ventana nueva llamada "tester" con la dirección colocada y con el tamaño especificado
        };
        console.log(navigator.userAgent);
    })

    //Se pone a la escucha el evento click
    d.addEventListener("click", e=>{ 
        if(e.target === $form.cerrar) {tester.close()}; //Si el click coincide con el botón cerrar
        //...cierra la ventana llamada "tester" 
    });
}
