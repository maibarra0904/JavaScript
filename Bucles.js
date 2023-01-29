/*
//Ejercicio 1: Solicitar una palabra y mostrarla 10 veces

palabra = prompt("Ingrese una palabra:")

for (let i = 0; i < 10; i++) {
    console.log(palabra+i);
}
*/

/*
//Ejercicio 2: Dibujar un simbolo ">" de tamano variable con asteriscos
let espacio = " ";
let asterisco = "*";
tamano = prompt("Ingrese el tamano del simbolo mayor que: ");

for(let i = tamano; i >0 ; i--) {
    console.log(espacio.repeat((tamano)-i)+asterisco);
}
for(let i = 0; i < tamano; i++) {
    console.log(espacio.repeat((tamano)-i)+asterisco);
}
*/

/*
//Ejercicio 3: Solicitar un numero entero e imprimir desde 1 hasta ese numero con pausas de 1 segundo
numero = prompt("Ingrese un numero entero positivo menor que 20:")

function espera(tiempo){ //Esta función de esperar sirve para introducirla en el bucle
var comienzo = new Date().getTime();
var final=0;
while( (final-comienzo) < tiempo){
    final = new Date().getTime();
}
}

for(let i = 0; i < numero; i++){
    console.log(i+1);
    espera(1000); //El tiempo tiene que estar en milisegundos
}

setTimeout(function(){ // Este metodo de windows crea la espera en una situación puntual
console.log("Conteo Terminado");
},1000);
*/

/*
//Ejercicio 4: Mostrar los números impares hasta el número especificado

limite = prompt("Indique un valor entero positivo hasta dónde mostrar los números impares:")
const impares = [];
for(let i = 0; i < limite/2; i++){
    imp00ares[i]=1+(2*i);
}
console.log(impares.toString());
*/

/*
//Ejercicio 5: Mostrar el valor del capital mas intereses de cada período para un lapso especificado
capital = prompt("Ingrese el valor del capital:");
interes = prompt("Ingrese el valor del interes:");
periodo = prompt("Ingrese el periodo del prestamo:");

let interes_comp = 1 + (interes/100)
for(let i = 0; i < periodo; i++){

    console.log("El capital en el año "+(i+1)+" es: "+Math.round((capital*Math.pow(interes_comp, i+1))));    

}
*/


//Ejercicio 6: Mostrar la tabla de multiplicar desde el 1 hasta el número ingresado

/*
a = prompt("Ingrese hasta que número de tabla de multiplicar desea visualizar: ")
let b = "";

for (let i=0;i<a;i++){
    for (let j=0;j<a;j++){
        b+=(i+1)*(j+1)+"\t";     
    }
    console.log(b);
    b = "";  
}
*/
// const a=30, b=7, c=[0.2,0.35,0.4,0.45], d=[1.1,1.8,2.3,3.5]
// function e(a, b, c, d) {
//     const result = [];
//     let val=0;
//     for (var i = 0; i < c.length; i++) {
//         val = a * c[i] + b * d[i];
//         result[i] = parseFloat(val.toFixed(1));
//     }
//     return result;
// }
// console.log(e(a,b,c,d));
/*
const gifts = ['cat', 'game', 'socks'], list=[];

function wrapping(gifts) {
for(let i=0; i<gifts.length;i++) {
    list[i] = ("*".repeat((i+5))) + "\n*" + gifts[i] + "*\n" + ("*".repeat((i+5)));
}
return [list];
}

const wrapped = wrapping(gifts);

console.log(wrapped);
*/


//Bucle for: Se declara la variable contador dentro del bucle
for (let i=0; i<10;i++) {
    console.log(i);
}

//Bucle while: Se declara la variable contador fuera del bucle
//Primero evalúa la condición y luego aplica el contenido
let j=0;

while (j<10) {
    console.log(j);
    j++;
}

//Bucle Do While: Similar al while con la diferencia que primero
//aplica el contenido y luego evalúa la condición
let k = 10;
do {
    console.log(k);
    k++;
} while (k<10);
        