const input = document.querySelector ("#searchInput")
const userList = document.querySelector ('#users')

let $users = [];

window.addEventListener('DOMContentLoaded', async ()=>{
    
    userList.innerHTML = "<h1>Loading</h1>"
    
    const data = await loadUsers ();
    $users = data.data
    renderUsers($users);
    console.log("loaded");
})

async function loadUsers() {
    const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=1000')
    return await response.json()
}

input.addEventListener("keyup" , e => {
    const newUsers = $users.filter(user => `${user.firstname.toLowerCase()}${user.lastname.toLowerCase()}`
    .includes(input.value.toLowerCase()))
    
    renderUsers(newUsers)
})

const createUserItems = users => users.map(user => `<li class="hover:bg-yellow-100 hover:cursor-pointer">
${user.firstname} ${user.lastname}</1i>`).join(" ")


function renderUsers (users) {
    const itemsString = createUserItems(users)
    userList.innerHTML = itemsString
}
