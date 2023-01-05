const d = document,
$selectPrimary = d.getElementById("select-primary"), //Se llama la lista de estados
$selectSecondary = d.getElementById("select-secondary"); //Se llama la lista de municipios dependiente del estado seleccionado

function loadStates(){
    fetch("https://api.copomex.com/query/get_estados?token=dbc8e19e-4a3a-4bda-ac3c-bcb94e63a757") //Se hace la petición de la API de la lista de estados
    .then(res => res.ok ? res.json(): Promise.reject(res)) //Se valida que exista una respuesta y la convierte a formato Json
    .then(json => {
        let $options = `<option value="">Elige un estado</option>`; //Se crea una variable con una lista desplegable vacía en formato html
        json.response.estado.forEach(el => $options += `<option value="${el}">${el}</option>`); //Se agregan todos los estados a la lista anterior
        $selectPrimary.innerHTML = $options; //Se añade la lista con todos los estados al html
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
    })
}

//Función para cargar los municipios de un estado tomando como parámetro el estado seleccionado de la lista anterior
function loadTowns(state) {
    //Se hace la petición a la API donde están los municipios dependiendo del estado
    fetch(`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=dbc8e19e-4a3a-4bda-ac3c-bcb94e63a757`)
    .then(res => res.ok ? res.json(): Promise.reject(res)) //Se convierte la respuesta a Json
    .then(json => {
        console.log(json);
        let $options = `<option value="">Elige un municipio</option>`; //Se crea una lista desplegable para los municipios
        json.response.municipios.forEach(el => $options += `<option value="${el}">${el}</option>`); //Se agregan los municipios tomados de la API a la lista
        $selectSecondary.innerHTML = $options; //Se inserta la lista con los municipios en el html
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
    })
}

//A la carga del documento se programa la lista de estados
d.addEventListener("DOMContentLoaded",loadStates);

//Se pone a la escucha que cuando haya una modificación en la lista de estados
//Se ejecute la función para cargar los municipios de ese estado
$selectPrimary.addEventListener("change", e=>loadTowns(e.target.value));