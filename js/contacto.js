/* Obtiene el formulario de contacto a traves de su id
y guarda una referencia al elemento en una variable constante */
const f_contacto = document.querySelector('#form-contacto');

// Escucha el evento de envío del formulario 
f_contacto.addEventListener('submit', (e) => {
    e.preventDefault();
    validarCamposGeneral(f_contacto);
});