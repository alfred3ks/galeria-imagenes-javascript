/*

Cargando categorias al proyecto de forma dinámica. Como podemos ver ahora tenemos una sola categoria que no es dinámica. Lo que haremos es construir la página de inicio del proyecto de imágenes.

Para eso voy a crear un archivo en src llamado cargarCategorias.js

En este archivo es donde vamos a mostrar las categorias del proyecto.

El código cargado en el HTML hardocdeado es el siguiente:

  <div class="contenedor">
    <div class="categorias" id="categorias">
      <a href="#" class="categoria" data-categoria="america">
        <img class="categoria__img" src="./img/america.jpg" alt="" />
        <div class="categoria__datos">
          <p class="categoria__nombre">America</p>
          <p class="categoria__numero-fotos">35 fotos</p>
        </div>
      </a>
    </div>
  </div>

Lo que hecho es crear de forma dinamica que se muestre esta informacion leyendo del archivo en local.

El archivo cargarCategorias.js nos queda asi:

*/

// Obtenemos la data a mostrar, nuestra BD:
import dataCategorias from './data/categorias';
// Hacemos destructuring para aceder mas facil a la información:
const { categorias } = dataCategorias;

// Obtenemos del HTMl donde vamos a mostrar la data:
const contenedorCategorias = document.getElementById('categorias');

// Iteramos para mostrar la información:
categorias.forEach((categoria) => {
  // Vamos a crear un elemento recuerda los tres pasos:
  const a = document.createElement('a');
  const plantilla = `
            <img class="categoria__img" src="${categoria.imagenPortada}" alt="${categoria.imagenPortada}" />
            <div class="categoria__datos">
              <p class="categoria__nombre">${categoria.nombre}</p>
              <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
            </div>`;

  a.innerHTML = plantilla;
  a.classList.add('categoria');
  a.href = '#';
  // Asi creamos la categoria personalizada
  a.dataset.categoria = categoria.id;

  // Agregamos al contenedor todas las categorias:
  contenedorCategorias.append(a);
});

/*
NOTAS:

Aquí vemos como crear un atributo personalizado, con ese atributo es que vamos a a acceder con js para poder mostrar las imagenes en el carucel cuando se haga click sobre cada categoria. La propiedad se llama dataset.

  a.dataset.categoria = categoria.id;

*/
