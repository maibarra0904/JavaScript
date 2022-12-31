const input = document.querySelector ("#searchInput") //Se llama la caja donde se ubicará el texto de busqueda
const userList = document.querySelector ('#users') //Se llama el objeto donde cargará la información

let $users = [];//Array para agregar la información de usuarios (API Json)

//Configuración a la carga del documento con función asíncrona
window.addEventListener('DOMContentLoaded', async ()=>{
    
    
    userList.innerHTML = "<img src='imagenes/loader.gif'>" //Insertar ícono de loader
    
    const data = await loadUsers (); //Ejecuta la función de carga de usuarios
    $users = data.data //Guarda en este array los datos de la API Json cargada
    renderUsers($users);//Ejecuta la función de inserción de usuarios en el objeto html
    console.log("loaded");
})

async function loadUsers() {
    const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=1000') //Recibe los datos de la API externa
    return await response.json() //Convierte la respuesta en formato JSON
}


//Configuración al presionar una tecla en la caja de texto
input.addEventListener("keyup" , e => {
    const $newUsers = $users.filter(user => `${user.firstname.toLowerCase()}${user.lastname.toLowerCase()}`
    .includes(input.value.toLowerCase())) //Filtra los datos de los nombres o apellidos de los usuarios
                                        //(convertidos a minúsculas) que contengan el texto
                                        //(convertido a minúscula) de la caja de búsqueda 
                                        //(Todo lo anterior se encuentra en formato Json)
    renderUsers($newUsers) //(función) Pinta la lista anterior (filtrada) en el html
})


function renderUsers (users) {
    const createUserItems = user => user.map(user => `<li class="hover:bg-yellow-100 hover:cursor-pointer">
    ${user.firstname} ${user.lastname}</li>`).join(" ")//Crea una lista originalmente en formato Json
                                                        //(en este caso tomando apellidos y nombres)
                                                        //y la convierte en lista html 

    userList.innerHTML = createUserItems(users);        //Se escribe la lista original en el html
}                                                       //También sirve para reescribir la lista
                                                        //original y colocar la lista filtrada
