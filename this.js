//This solo sirve en funciones normales

const producto = {
    nombre: "manzana",
    color: "verde",
    precio: 20,
    informacion: function() {
        console.log(`El producto: ${this.nombre} es color ${this.color} y su precio es $0.${this.precio}`);
    }
}

producto.informacion();


//Con array function saldría error this

const producto2 = {
    nombre: "pera",
    color: "verde",
    precio: 20,
    informacion: () => {
        console.log(`El producto: ${this.nombre} es color ${this.color} y su precio es $0.${this.precio}`);
    }
}

producto2.informacion();

