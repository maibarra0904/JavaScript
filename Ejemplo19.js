const $axios = document.querySelector("#axios"), //también se pudo usar (getElementById("axios"))
    //$fragment = document.createDocumentFragment(), //Se crea un nuevo fragmento (solo sirve para la forma alternativa)
    input = document.querySelector("#searchInput"); //Se selecciona la caja de búsqueda (texto)

let json;

(() => {
    
    const $loader = document.querySelector(".loader"); //Se llama al loader

    axios.get("data/fakeData.json") //Se llama al archivo JSON guardado en el equipo usando axios
    .then(
        (res) => { //"res" representa la respuesta de la llamada en formato Json

            console.log(res);

            
            const createUserItems = user => user.map(user => `<li class="hover:bg-yellow-100 hover:cursor-pointer">
            ${user.firstName} ${user.lastName}</li>`).join(" ") //Se crea una función que mapea una lista de formato Json a html
            json = res.data.users; //Se llaman los datos de la respuesta de propiedad data.users
            $axios.innerHTML = createUserItems(json); //Se inserta la lista anterior en html
            
            /*
            //Una forma alternativa de insertar la lista en el html (no óptima)
            

            json.forEach( (el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.firstName} ${el.lastName}`;
                $fragment.appendChild($li);

            })
            $axios.appendChild($fragment);
            */

            $loader.classList.add("none");//Se quita el loader
        }
    )
    .catch(

    ).finally(
    );
}

)();

//programación del filtrado de datos a partir del texto ingresado en la caja
input.addEventListener("keyup" , (e) => {

    const $newUsers = json.filter(user => `${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}`
    .includes(input.value.toLowerCase())) //Se ejecuta el filtro en formato Json
    
    renderUsers($newUsers) //Se lo pinta en el html a través de esta función
})


//Función para pintar la lista en formato Json en el html
function renderUsers (users) {
    
    const createUserItems = users => users.map(user => `<li class="hover:bg-yellow-100 hover:cursor-pointer">${user.firstName} ${user.lastName}</li>`).join(" ")
    //Se mapea la lista original en formato Json y la convierte en html
    $axios.innerHTML = createUserItems(users); //Se pinta la lista anterior en el html actual
}
