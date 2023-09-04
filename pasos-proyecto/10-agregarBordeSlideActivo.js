/*

Lo que haremos es la funcionalidad de cuando hacemos un click sobre una imagen del slide y se muestre en la galeria tambien se muestre el borde de la imagen activa en el slide:

Esta funcionalidad la vamos a agregar dentro la funcion o archivo galeria/cargarImagenActiva.js

import dataFotos from '../data/fotos';
// 📌 Agregamos lógica para cambiar borde de la imagen activa:
const categoriaActual = galeria.dataset.categoria;
// console.log(categoriaActual);

const fotos = dataFotos.fotos[categoriaActual];
// console.log(fotos);

// Leemos las fotos de la BD:
let indexImagenActual;
fotos.forEach((foto, index) => {
  if (foto.id === id) {
    // console.log(foto);
    // console.log(index);
    indexImagenActual = index;
    console.log(indexImagenActual);
  }
});

// Marcamos la imagen del carousel como activa:
if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
    / eliminamos la clase active de cualquier slide:
  galeria
    .querySelector('.galeria__carousel-slide--active')
    .classList.remove('galeria__carousel-slide--active');

  // Ahora accedemos a todas las imagenes del carousel: Retorna un NodeList:
  const imageSlide = galeria.querySelectorAll('.galeria__carousel-slide');
  // console.log(imageSlide);
  // console.log(imageSlide[indexImagenActual]);
  imageSlide[indexImagenActual].classList.add(
      galeria__carousel-slide--active'
  );
}

*/
