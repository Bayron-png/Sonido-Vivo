/* Obtiene el formulario de pedido a traves de su id
y guarda este elemento en una variable no mutable */
const f_pedido = document.querySelector('#form-pedido');

/* cuando ocurre el evento "submit" primero se evita el comportamiento
predeterminado de la pagina (enviar y recargar) para luego llamar a una
funcion externa que hara la validacion de campos */ 
f_pedido.addEventListener('submit', function (e) {
    e.preventDefault();
    validarCamposGeneral(f_pedido);
});

// Espera a que el documento HTML este completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Obtiene los botones de opción del tipo de entrega
    const radios = document.querySelectorAll('input[name="tipo-entrega"]');

    // Obtiene las secciones de retiro en tienda y despacho a domicilio
    const retiroTienda = document.getElementById('retiro-tienda');
    const despacho = document.getElementById('despacho');

    // Actualiza la vista según el tipo de entrega seleccionado
    function actualizarVista() {

        // Obtiene el valor del botón de opción seleccionado
        const seleccion = document.querySelector('input[name="tipo-entrega"]:checked').value;

        if (seleccion === 'tienda') {
            // Muestra la sección de retiro y oculta la de despacho
            retiroTienda.style.display = 'block';
            despacho.style.display = 'none';
        } else {
            // Muestra la sección de despacho y oculta la de retiro
            retiroTienda.style.display = 'none';
            despacho.style.display = 'block';
        }
    }

    // Detecta cuando cambia la opción de entrega seleccionada
    radios.forEach(radio => radio.addEventListener('change', actualizarVista));

    // Ejecuta la función al cargar la página para mostrar la vista inicial
    actualizarVista();

    // Relaciona cada punto de retiro con su dirección
    const direcciones = {
        'tienda-principal': 'Av. Valparaiso 123, Viña del Mar',
        'punto-mall': 'Mall Marina Arauco, Viña del Mar'
    };

    // Obtiene el selector de puntos de retiro y el mapa
    const select = document.getElementById('punto-retiro');
    const iframe = document.getElementById('iframe-mapa');

    // Actualiza el mapa cuando cambia el punto de retiro
    select.addEventListener('change', () => {
        
        // Obtiene la dirección correspondiente al punto seleccionado
        const direccion = direcciones[select.value];
        
        // Actualiza la dirección mostrada en el mapa
        iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`;
    });
});

