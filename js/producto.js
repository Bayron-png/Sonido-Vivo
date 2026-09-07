// Obtiene el botón para agregar el producto al carrito mediante su ID
const btnAgregar = document.querySelector("#btn-agregar");

// Escucha el evento de clic en el botón
btnAgregar.addEventListener('click',function(){
   
    // Muestra un mensaje confirmando que el producto fue agregado
    alert('Producto agregado al carrito');

    // Redirige al usuario a la página del carrito
    window.location.href = '../pedido.html';
});