/*
Creamos el evento para al hacer click sobre las categorias.
OJO Aqui vemos como podemos delegar eventos, vamos desde el contenedor padre a los hijos
*/

// Accedemos a las fotos que estan en data:
import dataFotos from './data/fotos.js';
const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) => {
  e.preventDefault();

  // Vamos a comprobar que hagamos click sobre la imagen: Para eso vamos a usar el metodo .closest() el cual nos permite buscar elementos:
  // console.log(e.target.closest('a'));
  if (e.target.closest('a')) {
    // Aplicamos esta clase a la galeria:
    galeria.classList.add('galeria--active');
    // Quitamos el scroll: OJO Ponerlo en el portfolio:
    document.body.style.overflow = 'hidden';

    // Asi capturamos la categoria del data-set al hacer click:
    const categoriaActiva = e.target.dataset.categoria;

    // Asi sacamos las fotos desde data:
    const fotos = dataFotos.fotos[categoriaActiva];

    // Recorremos para mostrar esa fotos en el carrusel:
    fotos.forEach((foto) => {
      console.log(foto.ruta);

      const slide = `
        <a href="#" class="galeria__carousel-slide">
          <img
            class="galeria__carousel-image"
            src="${foto.ruta}"
            alt="${foto.nombre}"
          />
        </a>`;
      // Accedemos al carussel: Buscamos con querySelector una clase:
      const carrusel = galeria.querySelector('.galeria__carousel-slides');
      carrusel.innerHTML += slide;

      // A la primera imagen de la galeria ponemos esta clase:
      galeria
        .querySelector('.galeria__carousel-slide')
        .classList.add('galeria__carousel-slide--active');
    });
  }
});
