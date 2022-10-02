const d = document;
let contador = 0;
const imageC = d.getElementById("imagen"), textBottom = d.getElementById("Registrar"),
textBox = d.getElementById("textBlock"), varText = d.getElementById("varText");



d.addEventListener("click", (e) => {
    
    let $secret;
   
    if(e.target.matches("#Registrar"))
    {
        if(textBox.value !== ""){
            varText.textContent = "Realice un intento:";
            $secret = textBox.value;
            textBottom.textContent = "Probar";
            textBox.value = "";
        };
        conteo_regresivo();
    };

    if(e.target.matches("#Probar"))
    {
        contador++;
    }
});



function conteo_regresivo(){

    const CountdownDate = new Date();
    let stopTime = CountdownDate.getTime();
    const $countdown = d.getElementById("message2");

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        efectiveTime = now - stopTime,
        regressiveTime = 10 - Math.round(efectiveTime/1000);        ;
        
        $countdown.innerHTML = `<h3> Le restan ${regressiveTime} segundos</h3>`;

        if ( regressiveTime<1){
            clearInterval(countdownTempo);
            stopTime = CountdownDate.getTime();
            conteo_regresivo();
            
        }
        
    },1000);

    

    
}