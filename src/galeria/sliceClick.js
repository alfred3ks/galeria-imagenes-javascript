import dataFotos from '../data/fotos';
import { cargarImagen } from './cargarImagenActiva';

// Funcion para cargar la imagen del slice en la galeria:
const sliceClick = (id, categoriaActiva) => {
  // console.log(id);
  // console.log(categoriaActiva);

  let idBD, nombre, descripcion, ruta;

  dataFotos.fotos[categoriaActiva].forEach((foto) => {
    // Muestra todas las fotos de la categoria activa:
    // console.log(foto);
    // console.log(foto.id);

    if (foto.id === id) {
      // console.log(foto.id);
      // console.log(foto.nombre);
      // console.log(foto.descripcion);
      // console.log(foto.ruta);
      idBD = foto.id;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
      ruta = foto.ruta;

      // Usamos la funcion de cargar imagen:
      cargarImagen(idBD, nombre, ruta, descripcion);
    }
  });
};

export default sliceClick;
