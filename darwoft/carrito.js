let precio = 0;
let arrayProductos = [];

let sumarCarrito = (nombre, checkeado, valor) => {

    if (checkeado) {
        precio += Number(valor);
        arrayProductos.push(nombre)
    } else {
        precio -= valor
        arrayProductos.pop(nombre)

    }
    console.log(precio)
    console.log(JSON.stringify(arrayProductos))

}
sumarPrecios = () => {
    let suma = precio.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
    console.log(suma);

    let articuloscarrito = document.getElementById("articuloscarrito");
    articuloscarrito.textContent = "articulos en el carrito: " + articuloscarrito.join(",");

    let totallcarrito = document.getElementById("totalcarrito");
    totalcarrito.textContent = "total; " + suma;
}
//desplegar div

let botondesplegar = document.getElementById("botondesplegar");
let contenidodesplegable = document.getElementById("contenidodesplegable");

botondesplegar.addEventListener("click", function () {
        if (contenidodesplegable.style.display === "none") {
            contenidodesplegable.style.display = "block";

        } else {

            contenidodesplegable.style.display = "none";
        }

    });


















