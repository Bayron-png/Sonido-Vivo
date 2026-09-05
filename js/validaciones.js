function validarCamposGeneral(formulario/*, mensaje*/){

    const camposRequeridos = formulario.querySelectorAll('[required]');
    
    let formularioValido = true;

    camposRequeridos.forEach(campo => {
        if (campo.offsetParent === null) {
            return;
        }

        if(campo.value.trim() === '') {
            campo.classList.add('campo-error');
        formularioValido = false;
        } else {
            campo.classList.remove('campo-error');
        }
    });
    /*
    const mensajeConfirmacion = formulario.querySelector('#mensaje-confirmacion');
    
    if(formularioValido) {
        mensajeConfirmacion.textContent = mensaje;
    } else {
        mensajeConfirmacion.textContent = '';
    } 
    */
    return formularioValido;
}

function validarCorreo(correo){

    const patronCorreo = /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

    let correoValido = true;

    if (!patronCorreo.test(correo.value.trim())) {
        correo.classList.add('campo-error');
        correoValido = false;
    } else {
        correo.classList.remove('campo-error');
    }

    return correoValido;
}
 