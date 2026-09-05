const f_login = document.querySelector('#form-login');
f_login.addEventListener('submit', function(e){
    e.preventDefault();
    const login_valido = validarCamposGeneral(f_login);
    const correoLogin = document.querySelector('#correo-login');
    const correo_valido = validarCorreo(correoLogin) 
    if(login_valido && correo_valido){
        window.location.href = 'Menu.html'
    }   
});


const f_registro= document.querySelector('#form-registro');
f_registro.addEventListener('submit', function(e){
    e.preventDefault();
    const registro_valido = validarCamposGeneral(f_registro);
    const correoRegistro = document.querySelector('#correo-registro');
    const correo_valido = validarCorreo(correoRegistro);

    if(registro_valido && correo_valido){
        window.location.href = 'Menu.html'
    }      
});


const login = document.getElementById('login');
const registro = document.getElementById('registro');

const mostrarLogin = document.getElementById('mostrarLogin');
const mostrarRegistro = document.getElementById('mostrarRegistro');

mostrarRegistro.addEventListener('click',function(e){
    e.preventDefault();

    login.style.display = 'none';
    registro.style.display = 'block';
});

mostrarLogin.addEventListener('click', function(e){
    e.preventDefault();
    login.style.display = 'block';
    registro.style.display = 'none';
});
