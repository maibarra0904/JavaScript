//Se debe declarar con export lo que se desea exportar
export const a = Math.PI;

export let m = "Mario Ibarra";

export let apellido = "Ibarra";

export function suma(a,b){
    return a +b;
}

//Se puede agrupar varios elementos para convertirlo en un objeto exportable 

const b = Math.PI;

let p = "Mario Ibarra";

function sumar(a,b){
    return a +b;
}

export const objeto ={b,p,sumar}

//Export Default es un tipo especial de exportacion que puede ser ejecutado directamente en el archivo import
//Solo puede haber un export default en el archivo

export default function defecto(){
    console.log("Esta es una exportacion por defecto");
}

//export default p;
//Cuando se trata de variables o constantes (let o const) el export default no se lo puede hacer en la misma linea

// Tambien se pueden exportar clases
export class saludar {
    constructor(){
        console.log("Hola, se ha importado una clase con exito");
    }

}