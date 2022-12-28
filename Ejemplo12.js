const d = document;

//Función para obtener el efecto ScrollSpy (no recibe ningún parámetro)
export default function scrollSpy(){
    
    const $sections = d.querySelectorAll("section[data-scroll-spy]"); //Se invoca a todos los
                                                //elementos que pertenecen a la clase "section"
                                                //con la propiedad "data-scroll-spy"

    //Función creada como parámetro del método IntersectionObserver
    const cb = (entries) => { //entries representa una entrada cualquiera sea intersección o no
        //console.log("entries", entries);

        entries.forEach((entry) => { //Por cada entrada haz lo siguiente
            //console.log("entry",entry);
            console.log(entry.intersectionRatio);
            const id = entry.target.getAttribute("id"); //Llama al objeto donde se produce la entrada
            if(entry.isIntersecting){ //Valida si la entrada es una intersección
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active"); //Resalta el objeto del menú parametrizado con ese id
            }                                                                                 //agregando la subclase "active" programada en css                                              
            else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active"); //Caso contrario, no lo resaltes
            }
        });

    };
    const observer = new IntersectionObserver(cb,{
        //rootMargin: "-250px"
        threshold: 0.5 // Verifica que la entrada (intersección) se del al 50% del sitio
    });

    $sections.forEach((el) => observer.observe(el));
}
