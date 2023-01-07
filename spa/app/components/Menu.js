//Creación dinámica del menú de la SPA

export function Menu(){
    const $menu = document.createElement("nav"); //Se crea un elemento de menú (nav)
    
    
    $menu.classList.add("menu"); //Se añade la clase menú 

    //Se crean los elementos del menú Home, Búsqueda, Contacto y Aprende JS
    $menu.innerHTML = `
    <a href = "#/">Home</a>
    <span>-</span>
    <a href = "#/search">Búsqueda</a>
    <span>-</span>
    <a href = "#/contact">Contacto</a>
    <span>-</span>
    <a href="https://aprendejavascript.org" target="_blank" rel = "noopener">Aprende JS</a>
    `;

    return $menu; //Retorna el menú
}