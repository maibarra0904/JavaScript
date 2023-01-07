//Se programa la función de búsqueda de artículos

export function SearchForm() {
    
    const d = document,
    $form = d.createElement("form"), //Se crea un nuevo formulario
    $input = d.createElement("input"); //Se crea una nueva caja de texto

    $form.classList.add("search-form"); //Se añade la clase search-form al formulario
    $input.name = "search"; //Se le agrega un nombre a la caja de texto
    $input.type = "search"; //Se le agrega el tipo
    $input.placeholder = "Buscar..."; //Se le agrega un texto de visualización a la caja de texto
    $input.autocomplete = "off"; //Se le elimina la opción de autocompletado

    $form.appendChild($input); //Se añade la caja de texto
    //console.log(location.hash);
    if(location.hash.includes("#/search")) { //Si el punto del sitio coincide con la búsqueda
        //Ver en documentación la propiedad location.hash: https://devdocs.io/dom/location/hash
        $input.value = localStorage.getItem("wpSearch"); //Lee la variable "wpSearch" del almacenamiento local
        //Ver la propiedad window.localStorage en la documentación: https://devdocs.io/dom/window/localstorage
    }

    d.addEventListener("search", e => {
        if(!e.target.matches("input[type='search']")) return false;
        if(!e.target.value) return localStorage.removeItem("wpSearch");
    });
    
    d.addEventListener("submit", e =>{
        if(!e.target.matches(".search-form")) return false;
        e.preventDefault();
        localStorage.setItem("wpSearch", e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".search-form")) {
            localStorage.removeItem("wpSearch");
        }; 
    
    })

    return $form;
}