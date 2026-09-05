const f_registro= document.querySelector('#form-registro');
f_registro.addEventListener('submit', function(e){
    e.preventDefault();
    const registro_valido = validarCamposGeneral(f_registro);
    const correoRegistro = document.querySelector('#correo-registro');
    const correo_valido = validarCorreo(correoRegistro);

    if(registro_valido && correo_valido){
        window.location.href = 'menu.html'
    }
});