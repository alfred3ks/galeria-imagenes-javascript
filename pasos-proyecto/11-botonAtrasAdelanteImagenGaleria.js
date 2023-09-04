/*

Vamos a crear la funcionalidad del los botones de adelante y atras de la imagen de la galeria.

Vamos a trabajar con el evento en la galeria.
Vamos a trabajar en galeria/eventosGaleria.js

  // 📌 Accedemos al boton de imagen siguiente:
  if (botonPulsado?.dataset?.accion === 'siguiente-imagen') {
    // console.log('Siguiente');
    cargarAnteriorSiguiente('siguiente');
  }

  // 📌 Accedemos al boton de imagen anterior:
  if (botonPulsado?.dataset?.accion === 'anterior-imagen') {
    // console.log('Anterior');
    cargarAnteriorSiguiente('anterior');


Tambien vamos a usar la funcion ya creada de cargarImagenActiva.js.

// 📌 Creamos las funciones para los botones de adelante atras de la galeria:
const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria.dataset.categoria;
  // console.log(categoriaActual);
  const imagenActualCategoria = dataFotos.fotos[categoriaActual];
  // console.log(imagenActual);
  const idImagenActual = parseInt(
    galeria.querySelector('.galeria__imagen').dataset.idImagen
  );
  // console.log(idImagenActual);

  // Recorremos la imagen dentro de la BD que coincida con el idImagenActual y obtenemos su index:
  let indexImagenActual;
  imagenActualCategoria.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      indexImagenActual = index;
      // console.log(indexImagenActual);
    }
  });

  if (direccion === 'siguiente') {
    // console.log('siguiente Imagen');
    // console.log(imagenActualCategoria[indexImagenActual + 1]);

    if (imagenActualCategoria[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } =
        imagenActualCategoria[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === 'anterior') {
    // console.log('anterior Imagen');
    // console.log(imagenActualCategoria[indexImagenActual - 1]);

    if (imagenActualCategoria[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } =
        imagenActualCategoria[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

*/
