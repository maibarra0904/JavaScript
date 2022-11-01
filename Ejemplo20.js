const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

let json;

(() => {
    
    const $loader = document.querySelector(".loader");

    
    
    async function getData(){
        try {
            let res = await axios.get("https://dummyjson.com/users"), //Se puede leer el archivo JSON a través de URL
            json = await res.data.users;

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.firstName} ${el.lastName}`
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($li);

        } catch (error) {
            let message = error.response.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`
        } finally {

        }
    }

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
