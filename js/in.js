//FAQ
const botones = document.querySelectorAll('.pregunta');

if (botones.length > 0) {
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const respuesta = boton.nextElementSibling;

            if (respuesta.classList.contains('hidden')) {
                respuesta.classList.remove('hidden');
                respuesta.classList.add('visible');
            } else {
                respuesta.classList.remove('visible');
                respuesta.classList.add('hidden');
            }
        });
    });
}

//CONTACTO
const botonContacto = document.getElementById('botonContacto');
if (botonContacto) {
    botonContacto.addEventListener('click', function () {
        document.getElementById('enviado').textContent = 'Tu mensaje fue enviado con éxito';
    });
}

