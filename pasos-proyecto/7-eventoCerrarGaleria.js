/*

Evento para cerrar la galeria al hacer click al boton, la equis.

Al abrir la galeria vemos que tenemos varios botones. Las flechas de adelante y atras del carussel, las flechas de la imagen mostrada de adelante y atras y la equis de cerrar la galeria.

Vamos a agregar un evento a toda la galeria y por delegación de eventos detectaremos cuando se le haga click a que boton.

Vamos a crear una carpeta dentro de src llamada galeria donde metere todo el código de la galeria.

src/galeria

Ahora vamos a crear el archivo para evento en la galeria.

src/galeria/eventoGaleria.js

🎯 NOTA: OJO a los atributos personalizados de los botones, data-accion, por medio de ese atributo es que accederemos a cada boton.

Tambien tenemos que ver que usamos el método closest(), para buscar elementos de abajo hacia arriba y encontrar el que le pasamos por parametro. Recordar que esto se hace porque estamos haciendolo con delegacion de evento, estamos colocando un evento a la galeria en ves de colocar un evento por elemento.

Aqui vemos que para cerrar la galeria he creado una funcion externa para modularizar mejor las funciones a aplicar.

*/

// 🎯 Cerrar la galeria: Funcion externa:
// Accedemos a la galeria:
const galeria = document.getElementById('galeria');

// Creamos una funcion para cerrar la galeria:
const cerrarGaleria = () => {
  galeria.classList.remove('galeria--active');
  // Devolvemos el scroll a la página:
  document.body.style.overflow = '';
};

export default cerrarGaleria;

// 🎯 Eventos a galeria:
// const galeria = document.getElementById('galeria');
import cerrarGaleria from './cerrarGaleria';

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
});
