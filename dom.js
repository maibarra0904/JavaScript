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

