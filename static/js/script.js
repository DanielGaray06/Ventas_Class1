//Variables 
const formulario = document.getElementById("formulario")
const inputCodigo = document.getElementById("codigo")
const inputNombre = document.getElementById("nombre")
const inputPrecio = document.getElementById("precio")
const inputCantidad = document.getElementById("cantidad")
const listProducts = []

//Agg producto

formulario.addEventListener("submit", function (event){
    event.preventDefault();
    const NewProduct = {
        codigo: inputCodigo.value,
        nombre: inputNombre.value,
        precio: Number(inputPrecio.value),
        cantidad: Number(inputCantidad.value),
        total: 0
    }
    listProducts.push(NewProduct)
    resultContent.style.display = "block";
    updateTable();
    form.reset();
});