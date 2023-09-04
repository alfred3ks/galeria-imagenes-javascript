import dataFotos from '../data/fotos';

// Creamos funcion para cargar imagen activa:
const galeria = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => {
  // Agregamos un id personalizado a la imagen:
  const idImagenGaleria = galeria.querySelector('.galeria__imagen');
  idImagenGaleria.dataset.idImagen = id;

  // Buscamos dentro de la galeria la imagen activa:
  const imagenActiva = galeria.querySelector('.galeria__imagen');
  imagenActiva.src = ruta;

  // Cargamos titulo imagen:
  const tituloImagen = galeria.querySelector('.galeria__titulo');
  tituloImagen.innerText = nombre;

  // Cargamos la descripcion de la imagen:
  const descriptionImagen = galeria.querySelector(
    '.galeria__descripcion-imagen-activa'
  );
  descriptionImagen.innerText = descripcion;

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
      // console.log(indexImagenActual);
    }
  });

  // Marcamos la imagen del carousel como activa:
  if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
    // eliminamos la clase active de cualquier slide:
    galeria
      .querySelector('.galeria__carousel-slide--active')
      .classList.remove('galeria__carousel-slide--active');

    // Ahora accedemos a todas las imagenes del carousel: Retorna un NodeList:
    const imageSlide = galeria.querySelectorAll('.galeria__carousel-slide');
    // console.log(imageSlide);
    // console.log(imageSlide[indexImagenActual]);
    imageSlide[indexImagenActual].classList.add(
      'galeria__carousel-slide--active'
    );
  }
};

export { cargarImagen };
