const f_login = document.querySelector('#form-login');
f_login.addEventListener('submit', function(e){
    e.preventDefault();
    const login_valido = validarCamposGeneral(f_login);
    const correoLogin = document.querySelector('#correo-login');
    const correo_valido = validarCorreo(correoLogin);

    if(login_valido && correo_valido){
        window.location.href = 'menu.html'
    }   
});