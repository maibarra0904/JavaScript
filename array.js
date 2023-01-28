const frutas = ["manzana", "pera", "durazno"], list = [];

//El bucle for en la actualidad es muy poco utilizado debido al método forEach dado a que
//este bucle pierde mucha memoria al recibir demasiadas instrucciones para recorrer el giftsCitiesay
for(let i = 0; i < frutas.length; i++){
    list[i] = "Fruta "+i+": "+frutas[i];
    console.log(list[i]);
}


//El método forEach, permite recorrer un giftsCitiesay sin necesidad de especificarselo. Recibe como primer parámetro
//de la función anónima asociada al elemento del giftsCitiesay, como segundo parámetro al índice de ordenamiento
// Y si hubiera un tercer parámetro (en este caso no), devuelve el giftsCitiesay completo.
frutas.forEach((fruta, indice) => {
    //console.log("Fruta ",indice,": ",fruta);
})


//El método map por su parte es importante no para recorrer un giftsCitiesay como tal, sino para realizar una
//transformación que tome como fuente un giftsCitiesay
const respuesta = frutas.map((fruta, indice) => {
    console.log(`Fruta ${indice}: ${fruta}`);
    return indice*fruta.length;
})

//console.log(respuesta);


//Este codigo permite obtener un nuevo giftsCitieseglo de un mapa considerando solo aquellos que tengan 
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
//flatmap no cambia el giftsCitieseglo original

let objetos2 = objetos.flatMap(n => n.includes("undefined")?[]:[n]);
//console.log("Objetos2:",objetos2);

//Otras formas de aplicar map
const productos = [{id: "1", name: "pina", costo: 5, existe:"si"},{id: "2", name: "manzana", costo: 3},
{id: "3", name: "naranja", costo: 6}];

//Obtener un nuevo giftsCitiesay tomando una propiedad de los objetos del giftsCitiesay base
const precios = productos.map(({costo}) => Math.round(costo*1.3)); 
//console.log(precios);

//Obtener un nuevo giftsCitiesay similar al anterior pero que cumpla una condición de esa propiedad
const precios2 = productos.map(({costo}) => costo<4 ? costo : Math.round(costo*1.3));
//console.log(precios2);

//Obtener una copia del giftsCitiesay base cumpliendo condiciones especificadas de sus propiedades
const precios3 = productos.map(function(productos) {    
    if (productos.existe) {
        return {...productos,
        costo: productos.costo*1.3}
    }
});

//console.log(precios3);

/*Funcion que permite obtener un giftsCitiesay personalizado a partir de otro*/
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

//console.log(countHours(year,holidays));

function divideSums(a, b) {
    const capacity = 2 * b.reduce((acc, cur) => acc + cur.length, 0);
    const weight = a.reduce((acc, cur) => acc + cur.length, 0);
    return Math.floor(capacity / weight);
}

//console.log(divideSums(["book", "doll", "ball"],["dasher", "dancer"]));

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    { l: 2, w: 2, h: 2 }
  ];


boxes.sort((a,b) =>a.l-b.l);
console.log(boxes[0].l);
let des=true;
let val1=-1,val2=-1,val3=-1;
for (let i=0; i<boxes.length;i++){
    if (boxes[i].l>val1 && boxes[i].w>val2 && boxes[i].h>val3) {
        val1 = boxes[i].l;
        val2 = boxes[i].w;
        val3 = boxes[i].h;
    }
    else {
        des = false;
    }
}   

console.log(des);

function getMaxGifts(giftsCities,maxGifts,maxCities) {
    let result = [];
    let mapeo = [];
    
    let f = function(prefix, giftsCities) {
      for (var i = 0; i < giftsCities.length; i++) {
        prefix.concat(giftsCities[i]).length<=maxCities?result.push(prefix.concat(giftsCities[i])):NaN;
        f(prefix.concat(giftsCities[i]), giftsCities.slice(i + 1));
      }
    }
    f([], giftsCities);

    for(let i=0;i<result.length;i++) {
        mapeo[i]=result[i].reduce((a,b)=>(a+b),0);
    }

    const mapfin = mapeo.map(el => {
        if((maxGifts - el)<0) {
            return Math.max(...mapeo);
        }
        else {
            return maxGifts - el
        }
        ;
    })
    
    return maxGifts - Math.min(...mapfin) < 0 ? 0 : maxGifts - Math.min(...mapfin);
}

console.log(getMaxGifts([50, 70, 30], 100, 2));

let space = " ";
let centerCube = "/\\";
let reverseCube = "\\/";
let baseCube = "_";
let rightCube = "\\_";
let leftCube = "_/";
let finalCube = "\\";

console.log(centerCube.substring(0,2));


console.log(space.repeat(1)+centerCube.repeat(1)+baseCube+rightCube.repeat(1)+finalCube);
console.log(space.repeat(0)+centerCube.repeat(2)+baseCube+rightCube.repeat(1)+finalCube);
console.log(space.repeat(0)+reverseCube.repeat(2)+leftCube.repeat(2));
console.log(space.repeat(1)+reverseCube.repeat(1)+leftCube.repeat(2));

console.log(space.repeat(2)+centerCube.repeat(1)+baseCube+rightCube.repeat(2)+finalCube);
console.log(space.repeat(1)+centerCube.repeat(2)+baseCube+rightCube.repeat(2)+finalCube);
console.log(space.repeat(0)+centerCube.repeat(3)+baseCube+rightCube.repeat(2)+finalCube);
console.log(space.repeat(0)+reverseCube.repeat(3)+leftCube.repeat(3));
console.log(space.repeat(1)+reverseCube.repeat(2)+leftCube.repeat(3));
console.log(space.repeat(2)+reverseCube.repeat(1)+leftCube.repeat(3));

function createCube(size) {

    let space = " ";
    let centerCube = "/\\";
    let reverseCube = "\\/";
    let baseCube = "_";
    let rightCube = "\\_";
    let leftCube = "_/";
    let finalCube = "\\";

    for(let i = size-1; i>-1;i--) {
        console.log(space.repeat(i)+centerCube.repeat(size-i)+baseCube+rightCube.repeat(size-1)+finalCube);
    }
    for(let i = 0; i<size;i++) {
        console.log(space.repeat(i)+reverseCube.repeat(size-i)+leftCube.repeat(size));
    }

    return ""
}

createCube(4);

function cube(size) {

    let space = " ";
    let centerCube = `/\\`;
    let reverseCube = "\\/";
    let baseCube = "_";
    let rightCube = "\\_";
    let leftCube = "_/";
    let finalCube = "\\";

    let superiorCube = [];
    let contador = 0;

    for(let i = size-1; i>-1;i--) {
        superiorCube[contador] = space.repeat(i)+centerCube.repeat(size-i)+baseCube+rightCube.repeat(size-1)+finalCube;
        contador++;
    }
    for(let i = 0; i<size;i++) {
        superiorCube[contador] = space.repeat(i)+reverseCube.repeat(size-i)+leftCube.repeat(size);
        contador++;
    }
    return superiorCube.join("\n");
}

console.log(cube(3));