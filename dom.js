let texto = "Esta es una prueba del dom";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);


console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("#menu"))
document.querySelectorAll("a").forEach((el) => console.log(el))