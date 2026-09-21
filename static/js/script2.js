
//Variables 
const formulario = document.getElementById("formulario")
const inputCodigo = document.getElementById("codigo")
const inputNombre = document.getElementById("nombre")
const inputPrecio = document.getElementById("precio")
const inputCantidad = document.getElementById("cantidad")
const resultContent = document.getElementById("result")
const tableBody = document.getElementById("tableBody")
const listProducts = [];
let indiceEditar = -1;



formulario.addEventListener("submit", function (event){
    event.preventDefault();

        const codigo = inputCodigo.value;
        const nombre= inputNombre.value;
        const precio = Number(inputPrecio.value);
        const cantidad= Number(inputCantidad.value);

    //Agregar producto
    if(indiceEditar === -1){
        const NewProduct = {
            codigo: codigo,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            total: 0 
        }
        listProducts.push(NewProduct);
    }
    //Actualizar un producto
    else{
        listProducts[indiceEditar].codigo = codigo;
        listProducts[indiceEditar].nombre = nombre;
        listProducts[indiceEditar].precio = precio;
        listProducts[indiceEditar].cantidad = cantidad;
        listProducts[indiceEditar].total = precio * cantidad;
    }
    
    //Mostrar Tabla
    resultContent.style.display = "block";
    updateTable();
    //Limpiar Formulario
    formulario.reset();
    //Volver al modo agregar
    indiceEditar= -1;
    botonAgregar.textContent = 'agregar';
    botonCancelar.style.display = 'none';
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