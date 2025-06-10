const botones = document.querySelectorAll('.pregunta');

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

const myCarousel = document.querySelector('#carouselExampleSlidesOnly');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  ride: 'carousel'
});

