const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment(),
    input = document.querySelector ("#searchInput");

let json;

(() => {
    
    const $loader = document.querySelector(".loader");

    axios.get("data/fakeData.json") //Se puede leer el archivo JSON guardado en el equipo
    .then(
        (res) => {

            console.log(res);

            json = res.data.users;

            json.forEach( (el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.firstName} ${el.lastName}`;
                $fragment.appendChild($li);

            })

            
            
            $axios.appendChild($fragment);
            $loader.classList.add("none");
        }
    )
    .catch(

    ).finally(
    );
}

)();

input.addEventListener("keyup" , (e) => {

    const $newUsers = json.filter(user => `${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}`
    .includes(input.value.toLowerCase()))
    
    renderUsers($newUsers)
})



function renderUsers (users) {
    
    const createUserItems = users => users.map(user => `<li>${user.firstName} ${user.lastName}</li>`).join(" ")
    $axios.innerHTML = createUserItems(users);
}
