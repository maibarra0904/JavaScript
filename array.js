const frutas = ["manzana", "pera", "durazno"]

//El bucle for en la actualidad es muy poco utilizado debido al método forEach dado a que
//este bucle pierde mucha memoria al recibir demasiadas instrucciones para recorrer el array
for(let i = 0; i < frutas.length; i++){
    console.log("Fruta ",i,": ",frutas[i])
}


//El método forEach, permite recorrer un array sin necesidad de especificarselo. Recibe como primer parámetro
//de la función anónima asociada al elemento del array, como segundo parámetro al índice de ordenamiento
// Y si hubiera un tercer parámetro (en este caso no), devuelve el array completo.
frutas.forEach((fruta, indice) => {
    console.log("Fruta ",indice,": ",fruta);
})


//El método map por su parte es importante no para recorrer un array como tal, sino para realizar una
//transformación que tome como fuente un array
const respuesta = frutas.map((fruta, indice) => {
    console.log("Fruta ",indice,": ",fruta);
    return indice*fruta.length;
})

console.log(respuesta);