/*
Eventos de la Galeria:
*/
// Accedemos a la galeria:
const galeria = document.getElementById('galeria');
import { cargarAnteriorSiguiente } from './cargarImagenActiva';
import carousel from './carousel';
import cerrarGaleria from './cerrarGaleria';
import slideClick from './slideClick';

// Creamos el evento:
galeria.addEventListener('click', (e) => {
  // Vemos toda la galeria:
  // console.log(e.target);

  // Vamos a detectar el boton: Cada boton tiene un atributo personalizado asi accederemos a el:
  // Usamos el método closest()
  // El método closest() busca de abajo hacia arriba hasta que encuentra lo que le pasamos por parametro.
  // console.log(e.target.closest('button'));
  const botonPulsado = e.target.closest('button');
  // console.log(botonPulsado);

  // 📌 Con dataset podemos acceder a los atributos personalizados que comienzan con el nombre data-algo:
  // Aqui vemos algo interesante, el ?, si ese elemento tiene la propiedad dataset, lo pongo porque da error si no lo lleva al pulsar sobre otro elemento que no tiene esa propiedad:
  // - - - CERRAR GALERIA:
  if (botonPulsado?.dataset?.accion === 'cerrar-galeria') {
    // console.log(botonPulsado.dataset.accion);

    // Buscamos dentro de la galeria un boton que tenga esa clase:
    // Aplicamos el estilos para cerrar la galeria: Dos formas aqui directamente o por medio de una función externa:
    // galeria.classList.remove('galeria--active');
    // document.body.style.overflow = ('');
    cerrarGaleria();
  }

  // 📌 Agregamos detectamos cuando hacemos click al corousel:
  // console.log(e.target.dataset.id);
  // - - - CAROUSEL SLIDE CLICK
  if (e.target.dataset.id) {
    // console.log(e.target.dataset.id);
    const id = parseInt(e.target.dataset.id);
    // Atributo personalizado agregado en eventoCategorias.js:
    const categoriaActiva = galeria.dataset.categoria;
    // Cargamos la imagen: Con una nueva funcion:
    slideClick(id, categoriaActiva);
  }

  // - - - Botones Galeria - - -
  // 📌 Accedemos al boton de imagen siguiente:
  if (botonPulsado?.dataset?.accion === 'siguiente-imagen') {
    // console.log('Siguiente');
    cargarAnteriorSiguiente('siguiente');
  }

  // 📌 Accedemos al boton de imagen anterior:
  if (botonPulsado?.dataset?.accion === 'anterior-imagen') {
    // console.log('Anterior');
    cargarAnteriorSiguiente('anterior');
  }

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
});
