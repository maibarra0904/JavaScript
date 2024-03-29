
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

//createCube(4);

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

const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

function getGiftsToRefill(a1, a2, a3) {
    let result = [];
    
    for (let i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1 && a3.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
  
    for (let i = 0; i < a2.length; i++) {
      if (a1.indexOf(a2[i]) === -1 && a3.indexOf(a2[i]) === -1) {
        result.push(a2[i]);
      }
    }
  
    for (let i = 0; i < a3.length; i++) {
      if (a1.indexOf(a3[i]) === -1 && a2.indexOf(a3[i]) === -1) {
        result.push(a3[i]);
      }
    }

    const uniqueArray = result.filter((item, index) => {
        return result.indexOf(item) === index;
    });
  
    return uniqueArray;
  }

  console.log(getGiftsToRefill(a1,a2,a3));

  function checkPart(part) {
    let left = 0;
    let right = part.length - 1;
    let mismatchFound = false;
  
    while (left < right) {
      if (part[left] !== part[right]) {
        if (mismatchFound) return false;
        mismatchFound = true;
        if (part[left + 1] === part[right]) {
          left++;
        } else if (part[left] === part[right - 1]) {
          right--;
        }
      } else {
        left++;
        right--;
      }
    }
  
    return true;
  }

  console.log(checkPart("miidim"));

  function checkPal(part) {
    part = part.toLowerCase();
    let result=false;
    if(part === part.split("").reverse().join("")) {
      return true;
    }
    else {
      for (let i = 0; i < part.length; i++) {
        let combinacion = part.slice(0, i) + part.slice(i + 1);
        result= result===true ? true : combinacion === combinacion.split("").reverse().join("");
      }
      return result;
    }

    
  }

  console.log(checkPal("midu"));

let leds = [0, 0, 1, 0, 0];
let ledEncendidos =0;
let onLeds = leds.forEach(el=>ledEncendidos+=el) 
let cycles = 0





function countTime(leds) {
  let array = leds.concat(leds);
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      count++;
    } else {
      count = 0;
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount*7;
}

// function countTime(leds) {
//   let count = 0;
//   let cycles = 1;
//   let a,b;
  
//   while (leds.includes(0)) {
    
//     //console.log(leds);
//     for (let i = 0; i < leds.length; i++) {
      

//       if (i===0) {
//         a=0;
//         b=leds.length-1;
//       } else {
//         a=i;
//         b=i-1;
//       }
//       if (leds[a] === 0 && leds[b] === 1) {
//         count++;
//         leds[a] = 1;
//         break;
//       } 
//     }


//     if (leds.includes(0)) {
//       cycles++;
//     }
    
//   }
  
    
  
  
//   return cycles*7;
// }


console.log(countTime(leds));

function checkJump(heights) {
  let parabola = true;
  let ultimo = -Infinity;
  let ultimoAsc = 0;

  if (heights.every(val => val === heights[0]) || heights.every((num, i) => { return i === 0 || num >= heights[i - 1]; }) || heights.every((num, i) => { return i === 0 || num <= heights[i - 1]; })) {
    parabola = false;
  }
  else {
    for(let i=0; i<heights.length; i++) {
      if(heights[i]>=ultimo) {
        ultimo=heights[i];
        ultimoAsc = i;
        if (i===heights.length-1) {
          parabola = false;
          break;
        }
      }
      else {
        ultimoAsc = i-1;
        break;
      }
    }

    for(let i=ultimoAsc; i<heights.length; i++) {
      if(heights[i]<=ultimo) {
        ultimo=heights[i];
      }
      else {
        parabola = false;
        break;
      }
    }
    
    
  
  }
  //return heights.every(val => val >= (val -1));
  return parabola;
}



function getCompleted(part, total) {
  let horas1 = +part.substring(0,2);
  let minutos1 = +part.substring(3,5);
  let segundos1 = +part.substring(6,8);
  let tts1 = (horas1*3600)+(minutos1*60)+(segundos1)

  let horas2 = +total.substring(0,2);
  let minutos2 = +total.substring(3,5);
  let segundos2 = +total.substring(6,8);
  let tts2 = (horas2*3600)+(minutos2*60)+(segundos2)

  const maximoComunDivisor = (a, b) => {
    let temporal;
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
  };

  let MCD = maximoComunDivisor(tts1,tts2);

  return `${tts1/MCD}/${tts2/MCD}`;

}

let part = '03:30:30';
let total = '05:50:50';

console.log(getCompleted(part,total));


const distance = 10
const sleighs = [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 5 }
]

function selectSleigh(distance, sleighs) {
  const consumo = sleighs.map(el => (distance * el.consumption)-20);
  const costFilter = consumo.filter((pro) => {
    return pro <=0;
  });
  const optimoVal = Math.abs(Math.max(...costFilter));

  let optimoName;

  if(costFilter.length===0) {
    optimoName=null;
  }
  else {
    for(let i=0; i<sleighs.length; i++) {
      if(Math.abs(distance *sleighs[i].consumption - 20)===optimoVal) {
        optimoName = sleighs[i].name;
      }
    }
  }
  return optimoName;
}

console.log(selectSleigh(distance, sleighs));

function selectSleigh2(distance, sleighs) {
  const consumo = sleighs.map(el => ((distance * el.consumption)-20)<=0?Math.abs(((distance * el.consumption)-20)):Infinity);
  const consumo2 = sleighs.map(el => ((distance * el.consumption)-20)<=0?{name: el.name, totalConsumption: Math.abs(((distance * el.consumption)-20))}:{name: el.name, totalConsumption: Infinity});
  const optName = consumo2.filter(el => el.totalConsumption === Math.min(...consumo2.map(el=>el.totalConsumption)));
  const menor = Math.min(...consumo2.map(el=>el.totalConsumption));
  let sum=0;
  const val = consumo.forEach(el => sum+=el);
  let optimoName;
  let posName = sleighs.filter(el => Math.abs(((distance * el.consumption)-20))===Math.min(...consumo)?el.name:null);
  if(val===0 || posName.length===0) {
    optimoName=null;
  }
  else{
    optimoName=posName[0].name;
  }
  console.log(consumo2, menor, optName);
  return optimoName;
}


console.log(selectSleigh2(distance, sleighs));


const lastBackup = 1546300800;
const changes = [
  [ -1, 1546300900 ],
  [ 2, 1546300800],
  [ 2, 1546300600],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ],
  [ 3, 1546301100 ],
  [ 5, 1546300600]
]


function getFilesToBackup(lastBackup, changes) {
  let cambios = changes.map(el => el[1]<=lastBackup?[el[0],false]:[el[0],true]);
  console.log(cambios);
  let selected = cambios.filter(el => el[1]===true);
  let resultado = Array.from(new Set(selected.map(el => el[0])));
  return resultado.sort((a,b)=>a-b);
}

console.log(getFilesToBackup(lastBackup, changes));

function getFilesToBackup2(lastBackup, changes) {
  let selected = changes.filter(el => el[1]>lastBackup);
  let cambios = selected.map(el => el[0]);
  let resultado = [...new Set(cambios)];
  resultado.sort((a,b)=>a-b);
  return resultado;
}

console.log(getFilesToBackup2(lastBackup, changes));

const path = [
  [5],
  [7, 4],
  [2, 4, 6],
  [3, 9, 5, 4],
  [1, 4, 6, 3, 2],
  [2, 1, 5, 8, 4, 3]
];

function getOptimalPath(path) {
  const optimal = path.reduceRight((prev, curr) => {
    return curr.map((val, index) => {
      return val + Math.min(prev[index], prev[index + 1])
    })
  })

  return optimal[0]
}

console.log(getOptimalPath(path));

let b='B B R P B R';
console.log(b.length);
function decorateTree (base) { 
  let conditions = [
    ['B_B', 'B'],
    ['P_P', 'P'],
    ['R_R', 'R'],
    ['B_P', 'R'],
    ['P_B', 'R'],
    ['R_P', 'B'],
    ['P_R', 'B'],
    ['B_R', 'P'],
    ['R_B', 'P']
  ]
  
  let output = [];
  let newArray = base;
  output.push(newArray);
  while(newArray.length>1) {
    let item = [];
    let level = [];
    let array = newArray.split(' ');
    for (let i = 0; i < array.length; i++) { 
      let pair = [array[i], array[i + 1]].join("_"); 
      item.push(pair);
      console.log(item);
      for(let j =0; j< conditions.length;j++){
        if(pair.toString()===conditions[j][0]){
          level.push(conditions[j][1]);
        }
      }
      
    }
    newArray = level.join(' ');
    console.log(newArray);
    output.unshift(newArray);
  }
  return output; 
} 
console.log(decorateTree(b));


let letter=`Hey santa Claus .  I want a bike.   I want a videogame! `
let resultado = "Hey Santa Claus. I want a bike. I want a videogame!";

function fixLetter(letter) {
  let simp = letter
    .replace(/([,.?!])([^,.?!])/g, '$1 $2') //deja un especio después de cada signo
    .replace(/\s+/g, ' ') //eliminar múltiples espacios en blanco y dejar uno solo
    .replace(/([,.?!]{2,})/g, $1 => $1[0]) // Si se repite un signo varias veces deja uno solo
    .replace(/([.?!])(\s)([A-z])/g, // Primera letra de cada oración debe estar en mayúscula
      (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
    )
    .replace(/(santa claus)/gi, 'Santa Claus') //Poner en mayúscula la palabra "santa claus" si aparece
    .trim() //Eliminar espacios de inicio y final
    .replace(/\s([,.?!])/g, '$1') //Quitar espacios de coma o punto
    .replace(/^([A-z])/g, $1 => $1.toUpperCase()) //Primera letra de carta debe estar en mayúscula
    .replace(/([^.?!])$/g, '$1.') //Colocar punto al final de la frase si no hay puntuación

  return simp
}

console.log(fixLetter(letter));
console.log(resultado);
console.log(fixLetter(letter)===resultado);

let gif = ['toy', 'toy', 'toy', 'toy'];
let maxW = 2;

function carryGifts(gifts, maxWeight) {
  let sum = 0;
  let acum = [];
  let result = [];
  
  for(let i=0; i<gifts.length; i++) {
    sum+=gifts[i].length;
    if(sum<=maxWeight){
      acum.push(gifts[i]);
      if(i===gifts.length-1){
        result.push(acum.join(" "));
      }
    }
    else {
      result.push(acum.join(" "));
      acum =[];
      gifts[i].length>maxWeight?acum =[]: acum.push(gifts[i]);
      sum = gifts[i].length;
      if(i===gifts.length-1){
        result.push(acum.join(" "));
      }
    }
  }


  result = result.join("")!=="" ? result : [];

  return result; 
}

console.log(carryGifts(gif, maxW));

let dry = 2
let nums = 20

function dryNumber(dry, numbers) {
  let result =[]; 
  for(let i = 1;i<numbers+1;i++){
    if(i.toString().includes(dry.toString())){
      result.push(i);
    }
  } 

  return result;
}

console.log(dryNumber(dry,nums));

const moreToys = ['ball', 'doll', 'car', 'puzzle']
const morePositions = [2, 3, 1, 0]

function sortToys(toys, positions) {
  
  let arr = [];
  for(let i =0; i<positions.length;i++) {
    arr.push([positions[i],toys[i]]);
  }
  arr.sort((a, b) => a[0] - b[0])
  const result = arr.map(el => el[1]);
  return result;
}

console.log(sortToys(moreToys,morePositions));

const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'Spain', weight: 17 },
  { country: 'France', weight: 50 }
]

// function howManyReindeers(reindeerTypes, gifts) {
  
//   let total = [];
//   let acum = 0;
//   const mapWeightCap = reindeerTypes.map(el => el.weightCapacity);
//   const mapGifts = gifts.map(el => reindeerTypes.map(el2 => 
//     (el.weight -   (el.weight % el2.weightCapacity))/el2.weightCapacity));
  
//   for(let i=0; i<mapGifts.length; i++) {
//     let giftR = [];
//     let acum = gifts[i].weight;
//     let acumGen = 0;

//     for(let j=0; j<mapGifts[i].length; j++) {
//       if(mapGifts[i][j]!=0) {
//         if((acum - (mapGifts[i][j] * mapWeightCap[j]))>=0){
          
//           giftR[j] = (mapGifts[i][j] * mapWeightCap[j]);
//           acum =  acum - giftR[j];
//           acumGen += mapGifts[i][j] * mapWeightCap[j]
//           console.log(giftR);
//         }
//         else {
//           giftR[j] = (mapGifts[i][j] * mapWeightCap[j]) - acumGen;
//           console.log(giftR);
          
//         }  
        
//       }
//       else {
//         giftR[j] = 0;
//       }
//     }
//     total.push(giftR);
//   }

//   console.log(mapGifts);

//   return total;
// }

function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)

  const traverse = (reindeers, weight) => {
    reindeerTypes.forEach(({ weightCapacity }, i) => {
      if (weight - weightCapacity >= 0) {
        reindeers[i].num += 1
        weight -= weightCapacity
      }
    })
    return weight > 0
      ? traverse(reindeers, weight)
      : reindeers
  }

  return gifts.map(({ country, weight }) => {
    const result = traverse(reindeerTypes.map(({ type }) => {
      return {
        type: type,
        num: 0
      }
    }), weight)
    return {
      country: country,
      reindeers: result.reverse().filter(({ num }) => !!num)
    }
  })
}


console.log(howManyReindeers(reindeerTypes, gifts));

const regalos = [
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
];

function printTable(gifts) {
  let longName = 4;
  let longQuantity = 8;
  let table = [];

  gifts.forEach(el => el.name.length>longName ? longName=el.name.length : null);
  gifts.forEach(el => el.quantity.toString().length>longQuantity ? longQuantity=el.quantity.toString().length : null);
  
  table.push("+".repeat(7+longName+longQuantity));
  table.push("| Gift"+" ".repeat(longName-4)+" | Quantity"+" ".repeat(longQuantity-8)+" |");
  table.push("| "+"-".repeat(longName)+" | "+"-".repeat(longQuantity)+" |");
  gifts.forEach(el => table.push("| "+el.name+" ".repeat(longName-el.name.length)+" | "+el.quantity+" ".repeat(longQuantity-el.quantity.toString().length)+" |"));
  table.push("*".repeat(7+longName+longQuantity));

  return table.join("\n");

}

console.log(printTable(regalos));

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]
// function checkStepNumbers(systemNames, stepNumbers) {
//   let Names = systemNames.filter((x, i) => systemNames.indexOf(x) === i);
//   let arr = {};
//   let arr2 = {};
//   for (let i = 0; i < systemNames.length; i++) {
//     if (!arr[systemNames[i]]) {
//       arr[systemNames[i]] = [];
//       arr2[systemNames[i]] = [];
//     }
//     arr[systemNames[i]].push(stepNumbers[i]);
//     arr2[systemNames[i]].push(stepNumbers[i]);
//   }
  
//   let result = true;
//   for(let i=0; i<Names.length ; i++) {
//     console.log(arr[Names[i]]);
//     console.log(arr2[Names[i]].sort((a,b) =>a-b));
//     if(arr[Names[i]]) {
//       result = result && arr[Names[i]].toString() === arr2[Names[i]].sort((a,b) =>a-b).toString();
//     }
//     else {
//       result = true;
//     }
//   }
  
//   return  result;
// }

function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((e, i) => 
    stepNumbers[i] < stepNumbers[
      i + systemNames.slice(i + 1).indexOf(e) + 1
    ] + !(systemNames.lastIndexOf(e) - i)
  )
}


console.log(checkStepNumbers(systemNames,stepNumbers));


//Reto 23

let commands = [
  'MOV 10,V00', // V00 es 10
  'DEC V00',    // decrementa V00 en 1  <---┐
  'INC V01',    // incrementa V01 en 1      |
  'JMP 1',      // bucle hasta que V00 sea 0 ----┘
  'INC V06'     // incrementa V06 en 1
]

// function executeCommands(commands) {
  
//   let out = [0, 0, 0, 0, 0, 0, 0];
//   let arr = commands.map(el => el.split(' '));// Division de comando e instrucción
//   let arr2 = arr.map(el => [el[0],el[1].split(',')]); //Subdivisión de instrucción

//   function exec(el,out) {
    
//       let com1 = el[1][0] ? el[1][0] : null; //Numero o ubicación
//       let com2 = el[1][1] ? el[1][1] : null; //Ubicación o null
//       switch (el[0]) {
//         case 'MOV':
          
//           if(isNaN(com1)) {
//             out[parseInt(com2[2])] = out[parseInt(com1[2])]; //Asigna el valor de Y en X
//           } else {
//             out[parseInt(com2[2])] = parseInt(com1); //Asigna el valor a X
//           }
//           break;
          
//         case 'ADD':
//           out[parseInt(com1[2])] += out[parseInt(com2[2])]; //Incrementa el valor en memoria al anterior
//           break;

//         case 'DEC':
//           out[parseInt(com1[2])] -= 1;  //Decrementa su valor en 1
//           break;

//         case 'INC':
//           out[parseInt(com1[2])] += 1; //Incrementa su valor en 1
//           break;
//         default:
//           break;
        
//       }
    
//   }

//   arr2.map(function an(el, index){
    
//     let com1 = el[1][0] ? el[1][0] : null; //Numero o ubicación
//     let com2 = el[1][1] ? el[1][1] : null; //Ubicación o null

//     switch (el[0]) {
//       case 'MOV':
        
//         if(isNaN(com1)) {
//           out[parseInt(com2[2])] = out[parseInt(com1[2])]; //Asigna el valor de Y en X
//         } else {
//           out[parseInt(com2[2])] = parseInt(com1); //Asigna el valor a X
//         }
//         break;
        
//       case 'ADD':
//         out[parseInt(com1[2])] += out[parseInt(com2[2])]; //Incrementa el valor en memoria al anterior
//         break;

//       case 'DEC':
//         out[parseInt(com1[2])] -= 1;  //Decrementa su valor en 1
//         break;

//       case 'INC':
//         console.log(out[0]);
//         out[parseInt(com1[2])] += 1; //Incrementa su valor en 1
//         break;
//       case 'JMP':
//         let arr = commands.map((_, i) => commands.slice(parseInt(com1), i + 1));
//         let newCom = arr[index-1];
//         while(out[0]!==0){
//           console.log('ok');
//           newCom.map((el)=>exec(el,out));
//         }
//         break;

//       default:
//         break;
      
//     }
//   })

//   let sal = out.map(el => el & 0xff)
//   // & 0xff
//   return sal ;
// }

function executeCommands(commands) {
  const maxValue = 256

  const registries = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0
  }

  const actions = {
    MOV: (value, registry) => {
      registries[registry] = value.startsWith('V')
        ? registries[value]
        : +value
    },
    ADD: (registry1, registry2) => {
      registries[registry1] = (
        registries[registry1] + registries[registry2]
      ) % maxValue
    },
    DEC: registry => {
      registries[registry] = (
        registries[registry] - 1 + maxValue
      ) % maxValue
    },
    INC: registry => {
      registries[registry] = (
        registries[registry] + 1
      ) % maxValue
    },
    JMP: (position, index) => {
      if (registries.V00 > 0) {
        commands.slice(position, index + 1)
          .forEach(command => executeAction(command, index))
      }
    }
  }

  const executeAction = (action, index) => {
    const [ command, args ] = action.split(' ')
    const argsList = args.split(',').map(argument => 
      argument.replace(/V(\d+)/, (_, p1) => `V0${p1 % 8}`)
    )
    actions[command](...argsList, index)
  }

  commands.forEach(executeAction)
  let registriesResult = Object.values(registries)

  return registriesResult
}


console.log(executeCommands(commands));