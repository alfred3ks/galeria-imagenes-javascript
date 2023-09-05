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
