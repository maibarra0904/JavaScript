//Creación de un objeto
const producto = {
    nombre: "Tv de 20'",
    precio: 250,
    disponible: true,
    descripcion: "Televisor para cocina o sala star"
}

//Se pueden agregar propiedades a los objetos
producto.usado = "No";

//Se pueden eliminar propiedades a los objetos
delete producto.descripcion;

//Se puede congelar el objeto para impedir que sus propiedades sean modificadas
Object.freeze(producto); //freeze impide agregar, eliminar o modificar. seal sí permite modificar

//Se puede destructurar un objeto, es decir, se extrae una propiedad y se crea una
//variable con el mismo nombre al mismo tiempo
const {precio,nombre} = producto;

console.log(producto);
console.log(precio,nombre);


const medidas = {
    peso: "1 Kg",
    dimensiones: "50x20x2"
}

// Se pueden unir las propiedades de diferentes objetos en una nueva variable
const infoProduct = {...producto,...medidas};
console.log(infoProduct);
