// Valida que los campos obligatorios del formulario tengan contenido
function validarCamposGeneral(formulario){

    // Obtiene todos los campos que tienen el atributo required
    const camposRequeridos = formulario.querySelectorAll('[required]');
    
    // Inicialmente el formulario es válido
    let formularioValido = true;

    // Recorre cada uno de los campos obligatorios
    camposRequeridos.forEach(campo => {

        // Ignora los campos que están ocultos
        if (campo.offsetParent === null) {
            return;
        }

        // Comprueba si el campo está vacío
        if(campo.value.trim() === '') {

            // Agrega una clase CSS para indicar el error
            campo.classList.add('campo-error');

        formularioValido = false;
        } else {
             // Elimina la clase de error si el campo contiene información
            campo.classList.remove('campo-error');
        }
    });
    // Devuelve si el formulario es válido o no (true o false)
    return formularioValido;
}

// Valida que el correo tenga un formato permitido
function validarCorreo(correo){

    // Define el patrón que debe cumplir el correo
    const patronCorreo = /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

    // Inicialmente el correo es válido
    let correoValido = true;

    // Comprueba si el correo cumple con el patrón definid
    if (!patronCorreo.test(correo.value.trim())) {

        // Agrega una clase CSS para indicar el error
        correo.classList.add('campo-error');

        correoValido = false;

    } else {
        // Elimina la clase de error si el correo es válido
        correo.classList.remove('campo-error');
    }

    // Devuelve si el correo es valido o no (true o false)
    return correoValido;
}
 