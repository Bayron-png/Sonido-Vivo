const f_contacto = document.querySelector('#form-contacto');

f_contacto.addEventListener('submit', function(e) {
    e.preventDefault();
    validarCamposGeneral(f_contacto/*, '¡Enviado correctamente!'*/);
});