
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