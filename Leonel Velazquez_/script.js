
let cantidadDeProductos = 0
let precioFinal = 0
let cantidadParaDescuento = 5


function inicio() {
    alert("Bienvenido a nuestra Tienda")

    alert("con la compra de 5 o mas productos, tiene descuento de 30%")
    let ingreso = prompt("igresar el precio del primer producto")
    agregarProducto(ingreso)
    while (ingreso != "fin") {
        ingreso = prompt("ingresar el precio del siguiente producto")
        agregarProducto(ingreso)
    } while (ingreso !== agregarProducto)
        totalizarCarrito()

}

function agregarProducto(precio) {
    if (precio != "fin") {
        let precioFloat = parseFloat(precio)
        precioFinal = precioFinal + precioFloat
        cantidadDeProductos = cantidadDeProductos + 1
    }

}

function totalizarCarrito() {
    if (cantidadDeProductos >= cantidadParaDescuento) {
        precioFinal = precioFinal * 0.30
        alert("La cantidad de productos ingresados fueron: "
            + cantidadDeProductos
            + " y el precio final es "
            + precioFinal + " " + "Se aplico un 30% de descuento")
            

    }
    else {
        alert("La cantidad de productos ingresados fueron: "
            + cantidadDeProductos
            + " y el precio final es "
            + precioFinal + " " + "No se aplicara descuento")
            
    }



}



inicio()