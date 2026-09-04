function validarCamposGeneral(formulario, mensaje){

    const camposRequeridos = formulario.querySelectorAll('[required]');
    const patronCorreo = /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    
    
    let formularioValido = true;

    camposRequeridos.forEach(function(campo) {
        if(campo.value.trim() === '') {
            campo.classList.add('campo-error');
        formularioValido = false;
        } else {
            campo.classList.remove('campo-error');
        }
    });

    const correo = formulario.querySelector('#correo');

    if (!patronCorreo.test(correo.value.trim())) {
        correo.classList.add('campo-error');
        formularioValido = false;
    } else {
        correo.classList.remove('campo-error');
    }

    const mensajeConfirmacion = formulario.querySelector('#mensaje-confirmacion');
    if(formularioValido) {
        mensajeConfirmacion.textContent = mensaje;
    } else {
        mensajeConfirmacion.textContent = '';
    } 
}