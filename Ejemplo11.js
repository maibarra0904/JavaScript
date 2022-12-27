const d = document;


//Se programa la funcion slider
export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next"), //Seleccionar clase asociada al botón next
    $prevBtn = d.querySelector(".slider-btns .prev"), //Seleccionar la clase asociada al botón previous
    $slides = d.querySelectorAll(".slider-slide"); //Se toman todos los objetos cuyo id sean slider-slide
                                                    //En este caso son las diapositivas y los detalles

    let i = 0;

    //Se pone a la escucha al dar click en un objeto
    d.addEventListener("click", (e) => {
        if(e.target === $prevBtn){ //Si el objeto que se dio click coincide con el botón previous
            e.preventDefault(); //Elimina las características por defecto
            $slides[i].classList.remove("active"); //Al slide actual remuévele la clase activa
            i--; //Regresa al slide anterior

            if(i<0){ //Si estabas en el primer slide (habiendo presionado el botón previous)
                i = $slides.length - 1; //Regresa al último slide del html
            }

            $slides[i].classList.add("active"); //Muestra el nuevo slide agregándole la subclase
                                                //"active" (configurado en css)
        }

        if(e.target === $nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if(i>=$slides.length){ //Si estabas en el ultimo slide 
                i = 0; //regresa al primero nuevamente
            }

            $slides[i].classList.add("active");
        }
    })
}