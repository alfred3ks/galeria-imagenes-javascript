/*
Vamos a cargar las imagenes dinamicamente al hacer click en cada categoria.
Para esto vamos a consumir la informacion que tenemos en src/data/fotos.

Seguimos trabajando con nuestro archivo eventoCategoria.js:

Para esto obtenemos de nuestra bd las fotos:

// Accedemos a las fotos que estan en data:
import dataFotos from './data/fotos.js';

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

*/
