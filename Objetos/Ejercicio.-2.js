const producto ={
    nombre : "Coca cola",
    precio : 20,
    cantidad : 5
}
console.log(producto)
const subtotal = producto.precio * producto.cantidad
const iva =producto.precio * 0.16
const Total = subtotal + iva

console.log("Producto:",producto.nombre)
console.log("Total= " + subtotal)
console.log("Iva= " + producto.precio * iva)
console.log("Subtotal a pagar=$" + Total)