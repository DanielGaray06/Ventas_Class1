
//Variables 
const formulario = document.getElementById("formulario")
const inputCodigo = document.getElementById("codigo")
const inputNombre = document.getElementById("nombre")
const inputPrecio = document.getElementById("precio")
const inputCantidad = document.getElementById("cantidad")
const resultContent = document.getElementById("result")
const tableBody = document.getElementById("tableBody")
const listProducts = []


//Agregar producto
function updateTable(){
    tableBody.innerHTML = ""
    listProducts.forEach(product => {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>${product.codigo}</td>
            <td>${product.nombre}</td>
            <td>${product.precio}</td>
            <td>${product.cantidad}</td>
            <td>${product.total}</td>
        `
        tableBody.appendChild(row)
    })
}


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
    formulario.reset();
});

//Mostrar Productos en la Tabla
function updateTable(){
    tableBody.innerHTML = ""
    listProducts.forEach(function (product) {
       const row = document.createElement("tr");
       row.innerHTML = `
           <td>${product.codigo}</td>
           <td>${product.nombre}</td>
           <td>${product.precio}</td>
           <td>${product.cantidad}</td>
           <td>${product.total}</td>
       `
       tableBody.appendChild(row);
       
    })
}