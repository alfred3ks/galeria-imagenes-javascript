/*

Lo que vamoa hacer es que cuando se haga click a una imagen des slice esta pasa a ser la imagen activa y cambien el titulo y su descripcion tambien.

Para esto ya tenemos un eevento en la galeria, seguimos con la delegacion de eventos.

Vamos a trabajar en el archivo eventoCategorias.js y vamos a colocarle un atributo personalizado a la imagen activa:

  // Colocamos un atributo personalizado a la imagen activa:
  galeria.dataset.categoria = categoriaActiva;

Abrimos el inspector y vemos el HTML y podemos observar que al entrar en la galeria de cualquier categoria se agrega ese atributo data-categoria='el continente clickeado'.

Ahora ya tenemos la categoria activa.

Ahora a las imagenes del caroussel le vamos a agregar su id, seguimos en eventoCategorias.js:

  // Ahora ya recorremos las BD para mostrar esa fotos en el carrusel:
  fotos.forEach((foto) => {
    const slide = `
      <a href="#" class="galeria__carousel-slide">
        <img
          class="galeria__carousel-image"
          src="${foto.ruta}"
          data-id="${foto.id}"
          alt="${foto.nombre}"
        />
      </a>`;

  Agregamos este atributo pesonalizado:
  data-id="${foto.id}"

Vamos al inspector y vemos que las imagenes del slice ya tienen asignada su id de manera dinamica con su atributo personalizado.

Ahora vamos a cambiar la imagen de la galeria al hacer click en cada imagen del slice: Vamos al archivo eventosGaleria.js:

// 📌 Agregamos detectamos cuando hacemos click al corousel:
// console.log(e.target.dataset.id);
if (e.target.dataset.id) {
  // console.log(e.target.dataset.id);
  const id = parseInt(e.target.dataset.id);
  // Atributo personalizado agregado en eventoCategorias.js:
  const categoriaActiva = galeria.dataset.categoria;
  // Cargamos la imagen: Con una nueva funcion:
  sliceClick(id, categoriaActiva);
}

📌 Y Creamos una funcion que vamos a ejecutar para cambiar la imagen de la galeria al hacer click en el carousel:

import dataFotos from '../data/fotos';
import { cargarImagen } from './cargarImagenActiva';
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

*/
