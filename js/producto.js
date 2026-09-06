const btnAgregar = document.querySelector("#btn-agregar");

btnAgregar.addEventListener('click',function(){
   
    alert('Producto agregado al carrito');
    window.location.href = '../checkout.html';
});