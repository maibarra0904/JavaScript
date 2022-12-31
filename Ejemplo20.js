const $axiosAsync = document.getElementById("axios-async"),
    input = document.querySelector("#searchInput"),
    $fragment = document.createDocumentFragment();

let json;

(() => {
    
    const $loader = document.querySelector(".loader");

    const sendGetRequest = async () => { //Se crea la función asíncrona
    try {
        const res = await axios.get('https://dummyjson.com/users'); //Se hace la petición Axios
        console.log(res);
        const createUserItems = user => user.map(user => `<li class="hover:bg-yellow-100 hover:cursor-pointer">
            ${user.firstName} ${user.lastName}</li>`).join(" ") //Se crea una función que mapea una lista de formato Json a html
        json = res.data.users; //Se llaman los datos de la respuesta de propiedad data.users
        $axiosAsync.innerHTML = createUserItems(json); //Se inserta la lista anterior en html
        $loader.classList.add("none");
        

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
    }
    
    sendGetRequest();

}

)();

input.addEventListener("keyup" , (e) => {

    const $newUsers = json.filter(user => `${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}`
    .includes(input.value.toLowerCase()))
    
    renderUsers($newUsers)
})



function renderUsers (users) {
    
    const createUserItems = users => users.map(user => `<li>${user.firstName} ${user.lastName}</li>`).join(" ")
    $axiosAsync.innerHTML = createUserItems(users);
}
