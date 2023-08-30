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
