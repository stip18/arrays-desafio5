
const objeto1 = { id: 1, producto: "Pilsen"};
const array = [objeto1, {id: 2, producto: "Cristal"}];
array.push({id: 3, producto: "Cusqueña"});

const productos = [{ id: 1, producto: "Pilsen"},
                  { id: 2, producto: "Cristal"},
                  { id: 3, producto: "Cusqueña"}];

for (const producto of productos){
    console.log (producto.id);
    console.log (producto.producto);
}  

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}
const Productos = [];
Productos.push (new Producto("Pilsen", "5"));
Productos.push (new Producto("Cristal", "5"));
Productos.push (new Producto("Cusqueña", "6"));


