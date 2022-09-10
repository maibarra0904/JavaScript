let texto = "Esta es una prueba del dom";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

//hablar(texto);


console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("#menu"))
document.querySelectorAll("a").forEach((el) => console.log(el))

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom".href));

document.documentElement.lang = "en"; // Esta es una forma de cambiar el valor de un  atributo
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX"); // Una forma alternativa de cambiar el valor de un atributo
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
console.log($linkDOM.target);

$linkDOM.setAttribute("href","https://www.google.com");
console.log($linkDOM.href);
console.log($linkDOM.getAttribute("href"));

$linkDOM.removeAttribute("href"); // Elimina un atributo
console.log($linkDOM.hasAttribute("href")); // Verifica si un atributo existe

console.log($linkDOM.dataset);
$linkDOM.dataset.description = "none"; //Cambia el atributo de data-atributos, en caso de no tener uno registrado lo agrega

console.log($linkDOM.style);


$linkDOM.style.backgroundColor = '#FFFFFF';
$linkDOM.style.borderRadius = '10px';

console.log($linkDOM.style.backgroundColor);

console.log($linkDOM.getAttribute("style"));

const $html = document.documentElement,
    $body = document.body;

let varRedColor = getComputedStyle($html).getPropertyValue("--red-color"); //Registro una propiedad en una nueva variables
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
let varBlueColor = getComputedStyle($html).getPropertyValue("--blue-color");

$linkDOM.style.color = varYellowColor;
$body.style.color = varRedColor;
$body.style.backgroundColor = varBlueColor;

console.log(varRedColor);
console.log(varYellowColor);

const $card = document.querySelector(".cards");

console.log($card);

$card.classList.add("rotate-45","opacity-80"); // Se puede agregar más de un atributo a la vez
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45"); //toggle añade un atributo si no existe o lo elimina si existe
//$card.classList.toggle("rotate-45");

$card.classList.replace("rotate-45","rotate-135"); // Reemplaza un atributo por otro
$card.classList.toggle("rotate-135");
$card.classList.toggle("opacity-80");

const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    Este es un ejemplo de como sustituir texto de un atributo del HTML creado previamente
    </p>

`;

$whatIsDOM.textContent = text; // Incluye el texto insertado sin considerar el código HTML
$whatIsDOM.innerHTML = text; // Incluye el texto insertado considerando el código HTML manteniendo el atributo anterior
$whatIsDOM.outerHTML = text; // Incluye el texto insertado considerando el código HTML eliminando el atributo anterior


const $figure2 = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");


$figure2.classList.add("card");
$figure2.appendChild($figcaptionText);
$figure2.appendChild($img);
$figure2.appendChild($figcaption);
$cards.appendChild($figure2);

const meses = [
    "Enero",
    "Febrero",
]

$ul = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach(el => {   
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})

document.write("<h3>Meses</h3>");
$ul.appendChild($fragment);
document.body.appendChild($ul);

const $cards2 = document.querySelector(".cards")
    $template = document.getElementById("template-card").content,
    $fragment2 = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        }
    ]

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true);
    $fragment2.appendChild($clone);

})
$cards2.appendChild($fragment2); 

const cards3 = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

// Forma antigua de modificar elementos
$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/nature" alt="Nature">
    <figcaption>Nature</figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards[0]);

//$cards.removeChild($cards.lastElementChild);

$cards.insertBefore($newCard, $cards.lastElementChild);

document.body.appendChild($cloneCards);


// Forma actualizada de modificar elementos

$cards.insertAdjacentElement("afterbegin", $newCard);

$cards.prepend($newCard);
$cards.append($newCard);
$cards.before($newCard);
$cards.after($newCard);

// EVENTOS

function HolaMundo(){
    alert("HolaMundo");
    console.log(event);
}

function HolaDesconocido(nombre = "Mario Ibarra"){
    alert("Hola: "+nombre);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple");
    $eventoRemover = document.getElementById("remover-evento");

$eventoSemantico.onclick = HolaMundo;

//Los eventos son removibles y se toma siempre el ultimo registrado (tienen la limitacion de ejecutar solo un evento)
$eventoSemantico.onclick = function(){
    alert("HolaMundo con manejador semantico");
}

//En los eventos multiples se pueden ejecutar varios eventos a la vez
$eventoMultiple.addEventListener("click",HolaMundo);
$eventoMultiple.addEventListener("click",function(e) {
                                    alert("HolaMundo con manejador multiple");
                                });
$eventoMultiple.addEventListener("click",HolaDesconocido); //Si no se declara como funcion anonima los parametros no aparecen
$eventoMultiple.addEventListener("click",() => {
                                    HolaDesconocido();
                                    HolaDesconocido("Alberto");
                                });


//Mecanismo para remover eventos
const removerDobleClick = (e) => {
    alert("Removiendo el evento tipo "+e.type);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
};

$eventoRemover.addEventListener("dblclick",removerDobleClick);