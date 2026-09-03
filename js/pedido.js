const f_pedido = document.querySelector('#form-pedido');

f_pedido.addEventListener('submit', function(e) {
    e.preventDefault();
    validarCamposGeneral(f_pedido, '¡Compra realizada!');
});

document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="tipo-entrega"]');
    const retiroTienda = document.getElementById('retiro-tienda');
    const despacho = document.getElementById('despacho');

    function actualizarVista(){
        const seleccion = document.querySelector('input[name="tipo-entrega"]:checked').value;

        if(seleccion === 'tienda'){
            retiroTienda.style.display = 'block';
            despacho.style.display = 'none';
        } else {
            retiroTienda.style.display = 'none';
            despacho.style.display = 'block';
        }
    }
    radios.forEach(radio => radio.addEventListener('change', actualizarVista));
    actualizarVista();

    const direcciones = {
        'tienda-principal': 'Av. Valparaiso 123, Viña del Mar',
        'punto-mall': 'Mall Marina Arauco, Viña del Mar'
    };

    const select = document.getElementById('punto-retiro');
    const iframe = document.getElementById('iframe-mapa');

    select.addEventListener('change', () => {
        const direccion = direcciones[select.value];
        iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`;
    });
});
