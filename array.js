const frutas = ["manzana", "pera", "durazno"], list = [];

//El bucle for en la actualidad es muy poco utilizado debido al método forEach dado a que
//este bucle pierde mucha memoria al recibir demasiadas instrucciones para recorrer el array
for(let i = 0; i < frutas.length; i++){
    list[i] = "Fruta "+i+": "+frutas[i];
    console.log(list[i]);
}


//El método forEach, permite recorrer un array sin necesidad de especificarselo. Recibe como primer parámetro
//de la función anónima asociada al elemento del array, como segundo parámetro al índice de ordenamiento
// Y si hubiera un tercer parámetro (en este caso no), devuelve el array completo.
frutas.forEach((fruta, indice) => {
    //console.log("Fruta ",indice,": ",fruta);
})


//El método map por su parte es importante no para recorrer un array como tal, sino para realizar una
//transformación que tome como fuente un array
const respuesta = frutas.map((fruta, indice) => {
    console.log(`Fruta ${indice}: ${fruta}`);
    return indice*fruta.length;
})

//console.log(respuesta);


//Este codigo permite obtener un nuevo arreglo de un mapa considerando solo aquellos que tengan 
//la propiedad "el"

let objetos=[];
function logMapElements(value, key, map) {
    //if(value.el===undefined) return;
    objetos.push(`${key}:${value.el}`);
    
    //console.log(`map.get('${key}') = ${value.el}`);

  }
let map = new Map([['foo', 3], ['bar', {el:["ok"]}], ['baz', {el:["ok2"]}]]).forEach(logMapElements);

//console.log("Objetos:",objetos);

//Usa un filtro usando flatmap descartando aquellos que no tienen la propiedad "el"
//flatmap no cambia el arreglo original

let objetos2 = objetos.flatMap(n => n.includes("undefined")?[]:[n]);
//console.log("Objetos2:",objetos2);

//Otras formas de aplicar map
const productos = [{id: "1", name: "pina", costo: 5, existe:"si"},{id: "2", name: "manzana", costo: 3},
{id: "3", name: "naranja", costo: 6}];

//Obtener un nuevo array tomando una propiedad de los objetos del array base
const precios = productos.map(({costo}) => Math.round(costo*1.3)); 
//console.log(precios);

//Obtener un nuevo array similar al anterior pero que cumpla una condición de esa propiedad
const precios2 = productos.map(({costo}) => costo<4 ? costo : Math.round(costo*1.3));
//console.log(precios2);

//Obtener una copia del array base cumpliendo condiciones especificadas de sus propiedades
const precios3 = productos.map(function(productos) {    
    if (productos.existe) {
        return {...productos,
        costo: productos.costo*1.3}
    }
});

//console.log(precios3);

/*Funcion que permite obtener un array personalizado a partir de otro*/
function wrapping(gifts) {
    const wrapped = gifts.map(gift => {
      const len = gift.length;
      return `${"*".repeat(len+2)}\n*${gift}*\n${"*".repeat(len+2)}`;
    })
  
    return(wrapped);
}

//console.log(wrapping(['cat', 'game', 'socks']));

var fecha = new Date(2022,11,25);
var opciones = {year: 'numeric', month: '2-digit', day: '2-digit'};
var fecha_formateada = fecha.toLocaleDateString('es-ES', opciones);
console.log(fecha_formateada,fecha.getDay());

const year = 2023
const holidays = ['01/06', '04/01', '12/25']

function countHours(year, holidays) {
    const days = holidays.map(sDate => {
        var fDate = new Date(year,sDate.substr(0,2)-1,sDate.substr(3,5));
        var wbD = fDate.getDay()===0 || fDate.getDay()===6 ? 0 : 1
        return  wbD
    })
    let sum = days.reduce((a, b) => {
        return a + b;
      }, 0);
    return sum*2
}

console.log(countHours(year,holidays));