const d = document;

let x =0,
y=0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(), // Se llaman a los limites del tamaño de la bola
    limitsStage = $stage.getBoundingClientRect();// Se llaman a los limites del tamaño del contenedor de la bola

    //Se programa las llamadas según la tecla presionada
    switch (e.keyCode) {
        case 37: //Corresponde a la direccional de la izquierda
            if (limitsBall.left > limitsStage.left){    //Se configura para que la bola no pueda salirse del margen izquierdo del contenedor
                e.preventDefault(); // Se anula el comportamiento por default de la tecla
                x--; //Mueve la bola una unidad de 
            };
            break;
        case 38: //Corresponde a la direccional de arriba
            
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            };
            break;
        case 39:
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
                
            break;
        case 40:
            
            if (limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++;
            } 
            break;

        default:
            break;

        
    };
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`; // Se define la cantidad de pixeles que se moverá la bola
}

//Se programa eventos de teclado al presional la tecla Alt+ otra tecla.
export function shortcutsall(e) {
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e);

    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    }
    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmación con el teclado");
    }
    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado un aviso con el teclado");
    }
}

export function shortcutssimp(e) {
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}   