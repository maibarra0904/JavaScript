/*
//Ejercicio 1: Crea una funcion que cuente el numero de caracteres de una cadena de texto
function conteo(a){
    //this.a = a;
    return "El numero de caracteres de la palabra: "+a+", es"+a.length; 
}

b = conteo("Mario");
console.log(b);
*/

/*
//Ejercicio 2: Devolver a traves de una funcion un numero recortado de caracteres
function recorte(a,b){
    return a.slice(0,b);
}
console.log(recorte("Alberto",3));
*/

/*
//Ejercicio 3: Separa las palabras de una frase en un array usando funciones
function separar(a,b){
    let c = a.split(b)
    return c;
}

console.log(separar("Hola que tal"," "));
*/

/*
//Ejercicio 4: Incluir n veces una misma cadena en un array mediante una función
function nrepetir(a,b){
    const c = [];
    for (let i = 0; i < b; i++) {
        c[i]=a;
    }
    return c;
}
console.log(nrepetir("Alberto",3));
*/

/*
//Ejercicio 5: Programa una función que invierta los caracteres de una cadena de texto
function invertir(a){
    const c = [];
    let b = "";
    for (let i = a.length; i >0 ; i--) {
        c[a.length-i]=a[i-1];
        b = c.join("");
    }
    return b;
}
console.log(invertir("Alberto"));
*/

/*
//Ejercicio 6: Verifica a través de una función cuantas veces se repite una palabra en una cadena
function verifica_repeticion(a,b){
    const c = a.split(" ");
    let contador = 0;
    for (let i = 0; i < c.length; i++) {
        if(c[i]==b){
            contador++;
        }
    }
    return "La palabra: "+b+", se repite "+contador+" veces.";
}
console.log(verifica_repeticion("Hola Mario, Hola","Hola"));
*/

/*
//Ejercicio 7: Desarrolla una función que elimine un patrón repetitivo de un array

function del_pat(a,b){
    const c = a.split(" ");
    const d = [];
    let e = "";
    for (let i = 0; i < c.length; i++) {
        d[i]=c[i].replace(b,"");
        e = d.join(" ")
    }
    return e;
}
console.log(del_pat("xw1, xw2 y xw3","xw"));
*/

/*
//Ejercicio 8: Programa una función que obtenga un número aleatorio entre 501 y 600
function random(){
    let m = 501+ Math.round(99*Math.random());
    return m;
}
console.log(random());
*/

/*
//Ejercicio 9: Verificar si un número ingresado es capicua
a = prompt("Ingrese un numero: ")
function capicua(n){
    const c = [];
    let b = 0;
    let d = false;
    for (let i = n.length; i >0 ; i--) {
        c[n.length-i]=n[i-1];
        b = parseInt(c.join(""));
    }
    if(n==b){
        d=true;
    }
    return d;
}
console.log(capicua(a));
*/

/*
//Ejercicio 10: Obtener el factorial de un numero
function factorial(n){
    let b=1;
    let c=1;
    for (let i = 0; i<n ; i++){
        b = n-i;
        c *= b
    }
    return c;
}        
console.log(factorial(5));
*/

/*
//Ejercicio 11: Verificar si un número ingresado es primo
a = prompt("Ingresa un número: ");

function es_primo(n){
    let b = 2;
    let contador = 0;
    let c = "";
    if(n>b){
        for (let i = 0; i<n ; i++){
            if(n%(b+i)==0){
                contador++;
            }
        }
        if(contador>1){
            c = "No es primo"
        }
        else {
            c = "Es primo"
        }
    }
                
    return c;
}
console.log(es_primo(a));
*/

/*
//Ejercicio 12: Programa una función para convertir numeros de base binaria a decimal
a = prompt("Ingresa un numero binario:")

function bin_dec(n){
    let dec = 0;
    for(let i=0;i<n.length;i++){
        dec += n[i]*Math.pow(2,n.length-i-1);
    }
    return dec;
}
console.log(bin_dec(a));
*/

/*
//Ejercicio 13: Función que cuente vocales y consonantes de una cadena
const voc = ["a","e","i","o","u"];
const cons = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

a = prompt("Ingrese una palabra: ")

const deletreo = [];
for(let k=0;k<a.length;k++){
    deletreo[k]=a[k];
}

function div_vc(n){
    let vocales=0, vocales2=0, consonantes = 0, consonantes2=0;
    for(let i=0;i<voc.length;i++){
        if(n.includes(voc[i])){
            let m = deletreo.filter(value => value == voc[i])
            vocales++;
            vocales2+=m.length;
        }
    }
    for(let j=0;j<cons.length;j++){
        if(n.includes(cons[j])){
            let s = deletreo.filter(value => value == cons[j])
            consonantes++;
            consonantes2+=s.length;
        }
    }
    
    return "La palabra '"+n+"' incluye "+vocales+" vocales y "+consonantes+" consonantes ("+vocales2+ " voc y "+consonantes2+" cons en total)"
}
console.log(div_vc(a));
*/

/*
//Ejercicio 14: Presentar mediante una función los números más altos y bajos de un array

a = prompt("Ingrese un conjunto de valores enteros separados por comas (Ej: 25, 30, -12,... etc)")

function MayorYMenor(n){
    const valores = n.split(",")
    let mayor = 0, menor = 0;
    for(let i=0;i<valores.length;i++){
        if(valores[i]>mayor){
            mayor = valores[i];
        }
        else if(valores[i]<menor){
            menor = valores[i];
        }
    }
    return "El valor mayor de los valores registrados es '"+mayor+"' y el menor es'"+menor+"'."
}

console.log(MayorYMenor(a));
*/

/*
//Ejercicio 15: Separar en dos arrays los números pares e impares respectivamente de una lista de números ingresados 

a = prompt("Ingrese un conjunto de valores enteros separados por comas (Ej: 25, 30, -12,... etc)");

function Pares_Impares(n){

    const valores = n.split(",");
    const pares = [], impares = [];

    for(let i=valores.length;i>=0;i--){
        if(valores[i]%2==0){
            pares.unshift(valores[i]);
        }
        else{
            impares.unshift(valores[i]);
        }
    }

    return "Lista de valores pares: "+pares+"\nLista de valores impares: "+impares

}

console.log(Pares_Impares(a));
*/

/*
//Ejercicio 16: Programa una función que ingrese un conjunto de numeros, elimine los duplicados y cree dos
//arrays uno para colocar los números de forma ascendente y otro descendente

a = prompt("Ingrese un conjunto de valores enteros separados por comas (Ej: 25, 30, -12,... etc):")

function Filtrar_Ordenar(n){
    const valores = n.split(",");
    const filtro =  valores.filter((item,index)=>{
                        return valores.indexOf(item) === index;
                    })

    return "La lista ingresada, filtrada y ordenada de forma ascendente: "+filtro.sort(function(a,b){return a - b;})+"\nLa lista ingresada, filtrada y ordenada de forma descendente: "+filtro.reverse(function(a,b){return a - b;});
}
console.log(a);
console.log(Filtrar_Ordenar(a));
*/

/*
//Ejercicio 17: Crear una clase llamada pelicula con id de pelicula, titulo, director, año estreno, pais origen, estreno, genero y calificacion en IMBD con validaciones

class IMBD{

    constructor(id, titulo, director, estreno, origen, genero, calificacion){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.origen = origen;
        this.genero = genero;
        this.calificacion = calificacion;
        
        const paises = this.origen.split(",");
        

        const generos_aceptados = ['Action','Adult','Adventure','Animation','Biography','Comedy','Crime','Documentary','Drama','Family','Fantasy','Film Noir','Game-Show','History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
        const generos_ingresados = this.genero.split(",");
        let contador_denegados = 0;
        for(let i=0;i<generos_ingresados.length;i++){
                if(generos_aceptados.indexOf(generos_ingresados[i])==-1){
                    contador_denegados++;
                }
            }
        if(contador_denegados>0){
            alert('Uno o más géneros de películas no son aceptados');
        }
        
        const esLetra = (caracter) => {
            let ascii = caracter.toUpperCase().charCodeAt(0);
            return ascii > 64 && ascii < 91;
        };

        const esNumero = (caracter) => {
            let ascii = caracter.charCodeAt(0);
            return ascii > 47 && ascii < 58;
        };

        if(this.id.length!=9||esLetra(this.id[0])==false||esLetra(this.id[1])==false){
            alert('El id debe contar con 9 caracteres, los 2 primeros letras y el resto numeros');
        }
        else{
            for(let i=2;i<this.id.length;i++){
                if(esNumero(this.id[i])==false){
                    alert('El id debe contar con 9 caracteres, los 2 primeros letras y el resto numeros');
                }
            }
        }

        if(this.titulo.length>100){
            alert('El titulo debe tener un máximo de 100 caracteres');
        }

        if(this.director.length>50){
            alert('El director debe tener un máximo de 50 caracteres');
        }

        for(let i=0;i<this.estreno.length;i++){
                if(esNumero(this.estreno[i])==false){
                    alert('El año debe ser numérico');
                }
        }
        if(this.estreno[1]==false||this.estreno[2]==false||this.estreno.length!=4){
                    alert('Ingrese un año valido');
                }
        
        let Es_decimal = /^\d*(\.\d{1})?\d{0}$/;

        if(Es_decimal.test(this.calificacion)==false){
            alert('En la calificación, se acepta hasta un decimal');
        }
        
        
                
    }
    static genero_mostrar(){       
        console.log(['Action','Adult','Adventure','Animation','Biography','Comedy','Crime','Documentary','Drama','Family','Fantasy','Film Noir','Game-Show','History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']);
        }

    ficha(){
        console.log('Id: \t\t\t\t\t'+this.id+'\nTitulo: \t\t\t\t'+this.titulo+'\nDirector: \t\t\t\t'+this.director+'\nAño Estreno: \t\t\t'+this.estreno+'\nPaís(es) de origen: \t'+this.origen+'\nGénero: \t\t\t\t'+this.genero+'\nCalificación: \t\t\t'+this.calificacion);
    }

    
}

const registro = new IMBD("ab1244812","Titanic","Roberto", "1998","EEUU,Japon","Comedy",9.1);
IMBD.genero_mostrar();
registro.ficha();
*/

//Ejercicio 18: Ejecute una función que ingrese un número entero positivo y presente los números naturales
// de uno en uno hasta llegar al número, con intervalos de un segundo

// a= prompt('Ingrese un número entero positivo:')

// function contar_hasta(n){
//     let contador=1;
//     const conteo = setInterval(()=>{
//         if(contador==n){
//         clearInterval(conteo);
//         }
//         console.log(contador);
//         contador++;    
//     },1000)
// }

// contar_hasta(a);


//Declaración de una función -- JS funciona en dos fases: Registro y Lectura de cógido
//En la etapa de registro leerá primero estas funciones.
sumar(5,4); //Por lo anterior indicado da lo mismo si llamas la función al inicio o al final, igual funcionará
function sumar(n1,n2) {
    console.log(n2 + n1);
}


//Expresión de la función -- Esto no ocurre en la fase de registro pues lo toma como una variable
//Por tanto sí o sí, la llamada a esta función expresada debe hacérsele después de declararla
const restar = function() {
    console.log(10-4);
}
restar();

//IIFE - Útiles para protegerla de lectura en otros archivos
(function(){
    console.log(10*2);
})()

//Diferencia entre función y método
function saludo() {
    console.log("Hola");
}
saludo(); //Esta es una función

const persona = {
    saludo: () => {
        console.log("Hola");       
    }
}
persona.saludo(); //Esto es un método (una función dentro de un objeto)

const num = 4;
let cadenaNum, numCadena;
cadenaNum = num.toString() //Este es un método usado para convertir un número a cadena de texto
numCadena = parseInt(cadenaNum) //Esta es una función para convertir en número un texto numérico
console.log(typeof cadenaNum, typeof numCadena);

//Función que retorna valor
function sumReturn(n1,n2) {
    return n1 + n2
}
const result = sumReturn(30,2);
console.log(result, sumReturn(30,25));


//Función que retorna valores diferentes al ser llamada varias veces: Caso de uso total del carrito de compras
let subtotal=0;

function sumaTotal(val) {
    subtotal += val;
    const factura = {
      val: subtotal,
      imp: Math.round(subtotal*0.12*100)/100,
    };

    return factura;
}

sumaTotal(20);
sumaTotal(30);
sumaTotal(120);

const cliente = sumaTotal(10);

console.log(`Subtotal: \t $${cliente.val} \nImpuesto: \t $${cliente.imp} \nTotal: \t\t $${cliente.val + cliente.imp}`);

//Array function

const ejemploSaf = function multiplicar (a,b) {
    return a*b;
}

const ejemploCaf = (a,b) => a*b;

console.log(ejemploSaf(3,4));
console.log(ejemploCaf(3,4));