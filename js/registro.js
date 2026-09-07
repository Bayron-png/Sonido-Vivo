/* Obtiene el formulario de inicio de sesion a traves de su id
y guarda una referencia al elemento en una variable constante */
const f_registro= document.querySelector('#form-registro');

// Escucha el evento de envío del formulario
f_registro.addEventListener('submit', function(e){

    // Evita el envío predeterminado del formulario y la recarga de la página
    e.preventDefault();

    // Valida que los campos obligatorios del formulario estén completos
    const registro_valido = validarCamposGeneral(f_registro);

    // Obtiene el campo de correo del formulario
    const correoRegistro = document.querySelector('#correo-registro');

    // Valida el formato y dominio permitido del correo
    const correo_valido = validarCorreo(correoRegistro);

    // Si ambas validaciones son correctas (true), redirige al menú principal
    if(registro_valido && correo_valido){
        window.location.href = 'menu.html'
    }
});