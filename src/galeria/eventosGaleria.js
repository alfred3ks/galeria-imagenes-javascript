/*
Eventos de la Galeria:
*/
// Accedemos a la galeria:
const galeria = document.getElementById('galeria');
import cerrarGaleria from './cerrarGaleria';
import sliceClick from './sliceClick';

// Creamos el evento:
galeria.addEventListener('click', (e) => {
  // Vemos toda la galeria:
  // console.log(e.target);

  // Vamos a detectar el boton: Cada boton tiene un atributo personalizado asi accederemos a el:
  // Usamos el método closest()
  // El método closest() busca de abajo hacia arriba hasta que encuentra lo que le pasamos por parametro.
  // console.log(e.target.closest('button'));
  const botonPulsado = e.target.closest('button');

  // Con dataset podemos acceder a los atributos personalizados que comienzan con el nombre data-algo:
  // Aqui vemos algo interesante, el ?, si ese elemento tiene la propiedad dataset, lo pongo porque da error si no lo lleva al pulsar sobre otro elemento que no tiene esa propiedad:
  if (botonPulsado?.dataset?.accion === 'cerrar-galeria') {
    console.log(botonPulsado.dataset.accion);

    // Buscamos dentro de la galeria un boton que tenga esa clase:
    // Aplicamos el estilos para cerrar la galeria: Dos formas aqui directamente o por medio de una función externa:
    // galeria.classList.remove('galeria--active');
    // document.body.style.overflow = ('');
    cerrarGaleria();
  }

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
});
