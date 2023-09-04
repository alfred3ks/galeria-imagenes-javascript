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
};

export { cargarImagen };
