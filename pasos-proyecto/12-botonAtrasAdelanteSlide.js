/*

Vamos a programar la funcionalidad de los botones de atras y adelante del slide del carrusel.
Seguimos trabajando con el archivo eventosGaleria.js

Tambien vamos a crear una funcion que se encargara de la lógica para los botones.
La vamos a crear en el archivo galeria/carrusel.js

Vamos a trabajar con la API de interception observer
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

Esta APi nos permite ejecutar codigo dependiendo si un elemento esta visible o no.

https://www.youtube.com/watch?v=cVsqA4NhDoI

📌 eventosGaleria.js

  // - - - Botones Carrusel - - -
  // 🎯 Accedemos al boton de imagen siguiente del carrusel:
  if (botonPulsado?.dataset?.accion === 'siguiente-slide') {
    // console.log('Adelante');
    carousel('adelante');
  }

  // 🎯 Accedemos al boton de imagen anterior del carrusel:
  if (botonPulsado?.dataset?.accion === 'anterior-slide') {
    // console.log('Atras');
    carousel('atras');
  }

// 📌 carousel.js:
const galeria = document.getElementById('galeria');
// Funcion para las flechas del carrusel:
const carousel = (direccion) => {
  // console.log('Vamos a: ' + direccion);

  // Obtenemos los indices de las imagenes visibles:
  // Creamos el observador:
  // Variables del observador:
  const opciones = {
    // Elemento a observar:
    root: document.querySelector('.galeria__carousel'),
    rootMargin: '0px',
    // % de la imagen que este visible
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entradas) => {
    // OJO a la propiedad isIntersecting, nos dice si la imagen se ve o no.
    // console.log(entradas);
    // console.log(entradas[8]);

    // Detectamos la slide visbles:
    const slidesVisibles = entradas.filter((entrada) => {
      if (entrada.isIntersecting) {
        return entrada;
      }
    });

    // vemos las slides visibles al 90%:
    // console.log(slidesVisibles);

    // Calculamos el index de la ultima imagen visble:
    if (direccion === 'atras') {
      // Falta por definir atras:

      const primerSlideVisible = slidesVisibles[0];
      const indexPrimerSlideVisble = entradas.indexOf(primerSlideVisible);
      // console.log(indexPrimerSlideVisble);

      if (indexPrimerSlideVisble >= 1) {
        entradas[indexPrimerSlideVisble - 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }

      //
    } else if (direccion === 'adelante') {
      const ultimoSlideVisble = slidesVisibles[slidesVisibles.length - 1];
      // console.log(ultimoSlideVisble);
      const indexUltimoSlideVisble = entradas.indexOf(ultimoSlideVisble);
      // console.log(indexUltimoSlideVisble);

      // Lo que hacemos es que a la siguiente imagen fuera de las visbles le hacemos un scroll suave:
      if (entradas.length - 1 > indexUltimoSlideVisble) {
        entradas[indexUltimoSlideVisble + 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }
    }

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    // console.log(slides);
    slides.forEach((slide) => {
      observer.unobserve(slide);
    });
  }, opciones);

  // Obtenemos todas las imagenes del slide:
  const slides = galeria.querySelectorAll('.galeria__carousel-slide');
  // console.log(slides);
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;

*/
