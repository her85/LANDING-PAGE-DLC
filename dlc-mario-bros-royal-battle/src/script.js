document.getElementById('formulario-descarga').addEventListener('submit', function(event) {
    event.preventDefault();

    // Verifica si el formulario tiene datos
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea'); // Selecciona los campos del formulario
    let isEmpty = true;

    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            isEmpty = false; // Si encuentra algún valor no vacío, no está vacío
        }
    });

    if (!isEmpty) {
        // Aquí puedes agregar la lógica para procesar la descarga
        alert('¡Gracias por descargar Valorant Mario Bros!');
    }
    // Si el formulario está vacío, no muestra ningún mensaje ni hace nada
});