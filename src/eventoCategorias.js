/*
Creamos el evento para al hacer click sobre las categorias.
OJO Aqui vemos como podemos delegar eventos, vamos desde el contenedor padre a los hijos
*/

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) => {
  e.preventDefault();

  // Vamos a comprobar que hagamos click sobre la imagen: Para eso vamos a usar el metodo .closest() el cual nos permite buscar elementos:
  console.log(e.target.closest('a'));
  if (e.target.closest('a')) {
    // Aplicamos esta clase a la galeria:
    galeria.classList.add('galeria--active');
    // Quitamos el scroll: OJO Ponerlo en el portfolio:
    document.body.style.overflow = 'hidden';
  }
});
