//Creación de un objeto (Object Literal)
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


//Creación de un Object Constructor usando prototipos

//Paso 1: Crear el objeto base con los parámetros requeridos
function Prod(nombre,precio) {
    this.nombre = nombre,
    this.precio = precio
}


//Paso 2: Crear un prototipo
//Un prototipo es un objeto creado a partir de uno anterior
//En este caso este prototipo toma los parámetros del objeto Prod (función) y los utiliza
//para un producto nuevo creado a partir de ese objeto
Prod.prototype.formatearProducto = function(tipo) {
    return `El precio del producto ${this.nombre} es $${this.precio} y su tipo es ${tipo}`;
}

//Paso 3: Se crean los objetos a partir del objeto principal
const product1 = new Prod("pera", 20);
const product2 = new Prod("manzana", 30);

//Paso 4: Se utilizan los prototipos
console.log(product1.formatearProducto("fruta"));



//Creación de un Object Constructor usando clases

//Paso 1: Crear el objeto (clase) con su constructor y métodos
class Servicio {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearServicio(tipo) {
        return `El precio del servicio ${this.nombre} es $${this.precio} y su tipo es ${tipo}`;
    }
}

//Paso 2: Se crean los objetos
const servicio1 = new Servicio("Lavanderia",5);

//Paso 3: Se utilizan los métodos del objeto creado
console.log(servicio1.formatearServicio("Presencial"));


//Herencia: Tomar la información de otro objeto para usarlo en uno nuevo

class Ubicacion extends Servicio {
    constructor (nombre,precio,ubic) {
        super(nombre,precio);
        this.ubic = ubic;
    }

    incluirUbicacion (tipo) {
        return `${this.formatearServicio(tipo)} cuya ubicación es ${this.ubic} `;
    }


}

const ubicacion1 = new Ubicacion("Mensajería", 3, "Milagro");

const ubicacion2 = new Ubicacion("Pintura", 50, "Milagro");

console.log(ubicacion1.formatearServicio("Transporte"));
console.log(ubicacion2.incluirUbicacion("Física"));