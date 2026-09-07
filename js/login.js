/* Obtiene el formulario de inicio de sesion a traves de su id
y guarda una referencia al elemento en una variable constante */
const f_login = document.querySelector('#form-login');

// Escucha el evento de envío del formulario
f_login.addEventListener('submit', function(e){

    // Evita el envío predeterminado del formulario y la recarga de la página
    e.preventDefault();

    // Valida que los campos obligatorios del formulario estén completos
    const login_valido = validarCamposGeneral(f_login);

    // Obtiene el campo de correo del formulario
    const correoLogin = document.querySelector('#correo-login');

    // Valida el formato y dominio permitido del correo
    const correo_valido = validarCorreo(correoLogin);

    // Si ambas validaciones son correctas (true), redirige al menú principal
    if(login_valido && correo_valido){
        window.location.href = 'menu.html'
    }   
});