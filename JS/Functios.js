const productos = [];
const botones = document.querySelectorAll(".tarjeta button");
const carritoProductos = document.querySelector("tbody")
botones.forEach((boton)=>{
    boton.addEventListener("click", (evento)=>{
        evento.preventDefault();
        const tarjeta  = boton.parentElement;
        const producto ={
            imagen: tarjeta.querySelector("img").src,
            nombre: tarjeta.querySelector("h3").textContent,
            precio: tarjeta.querySelector("div span ").textContent,
            id : tarjeta.querySelector("button").getAttribute("data-id"),
            cantidad: 1

        }
        agregarProducto(producto);
    }
    )

})
const botonEliminar = document.getElementById('eliminar')

botonEliminar.addEventListener('click', (evento)=>{
    evento.preventDefault()
    while(carritoProductos.firstChild){
        carritoProductos.removeChild(carritoProductos.firstChild)
    }
    return false
})

    

        
const agregarProducto = (producto) =>{
    const prd = document.createElement("tr")
    prd.innerHTML = `
        <td>
            <img src ="${producto.imagen}">
        </td>
        <td>
            ${producto.nombre}
        </td>
        <td>
            ${producto.precio}
        </td>
        <td>
            ${producto.cantidad}
        </td>
        <td>
            <a class="borrar" onclick="deleteRow(this)" href="#" data-id="${producto.id}"><i class="fas fa-trash-alt"></i></a>
        </td>
    `; 
    carritoProductos.appendChild(prd);
    productos.push(producto);
    console.log(productos);
  
}




function deleteRow(row){
    var d = row.parentNode.parentNode.rowIndex;
    document.getElementById('list').deleteRow(d);
 }

 

