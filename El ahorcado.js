const d = document;
let contador = 0, $secret;
const imageC = d.getElementById("imagen"), textBottom = d.getElementById("Registrar"),
textBox = d.getElementById("textBlock"), varText = d.getElementById("varText"), 
secretText = d.getElementById("secretWord"), textoConteo = d.getElementById("message2");



d.addEventListener("click", (e) => {
   
    if(e.target.matches("#Probar"))
    {
        clearInterval(countdownTempo);
        intento();
        
        conteo_regresivo();
        
    }
    
    if(e.target.matches("#Registrar"))
    {
        clearInterval(countdownTempo);
        accion_inicial();
        conteo_regresivo();
        
    };
    
    
});

d.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        try {
            clearInterval(countdownTempo);
            intento();
            conteo_regresivo();
        } catch (e) {
            clearInterval(countdownTempo);
            accion_inicial();
            conteo_regresivo();
        }
    }
});

let countdownTempo;
const dinamicD = [];

function accion_inicial() {
    if(textBox.value !== ""){
        varText.textContent = "Realice un intento:";
        $secret = textBox.value;
        deletreo = $secret.split("");
        textBottom.textContent = "Probar";
        textBottom.setAttribute("id","Probar");
        textBox.value = "";
        textBox.setAttribute("placeholder","");
        textBox.setAttribute("maxlength","1");

        for(let i = 0; i < deletreo.length; i++) {
            dinamicD[i] = " X ";
        }
        secretText.textContent = dinamicD.join("  ");

    };
}


function conteo_regresivo(){

    const CountdownDate = new Date();
    let stopTime = CountdownDate.getTime();
    const $countdown = d.getElementById("message2");

    countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        efectiveTime = now - stopTime,
        regressiveTime = 10 - Math.round(efectiveTime/1000);        ;
        
        $countdown.innerHTML = `<h3> Le restan ${regressiveTime} segundos</h3>`;
        textoConteo.style.color = 'red';

        if ( regressiveTime<1){
            clearInterval(countdownTempo);
            stopTime = CountdownDate.getTime();
            conteo_regresivo();
            intento();
        }
        
    },1000);
    
    
}

let deletreo, $num =  0;

function intento() {
    for(let i=0; i<deletreo.length; i++) {
        if(deletreo[i]===textBox.value) {
            dinamicD[i]=deletreo[i];
            $num++;
            
        }
    }
    
    
    if(deletreo.toLocaleString() === dinamicD.toLocaleString()) {
        alert(`Ganaste la palabra secreta era: ${$secret}`);
        location.reload();
    }

    if($num===0) {
        contador++;
        switch (contador) {
            case 1:
                imageC.setAttribute('src', '/ahorcado/ahorcado1.png');
                varText.textContent = "Llevas 1 intento de 5, prueba con otra letra:";
                break;
            case 2:
                imageC.setAttribute('src', '/ahorcado/ahorcado2.png');
                varText.textContent = "Llevas 2 intentos de 5, prueba con otra letra:";
                break;
            case 3:
                imageC.setAttribute('src', '/ahorcado/ahorcado3.png');
                varText.textContent = "Llevas 3 intentos de 5, prueba con otra letra:";
                break;
            case 4:
                imageC.setAttribute('src', '/ahorcado/ahorcado4.png');
                varText.textContent = "Llevas 4 intentos de 5, prueba con otra letra:";
                break;

            case 5:
                alert(`Perdiste, la palabra secreta era: ${$secret}`);
                location.reload();
            default:
                break;
        }
    }
    
    
    
    
    $num=0;
    textBox.value = "";
    secretText.textContent = dinamicD.join("  ");
    
}

