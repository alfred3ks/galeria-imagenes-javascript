// Accedemos a la galeria:
const galeria = document.getElementById('galeria');

// Creamos una funcion para cerrar la galeria:
const cerrarGaleria = () => {
  galeria.classList.remove('galeria--active');
  // Devolvemos el scroll a la página:
  document.body.style.overflow = '';
};

export default cerrarGaleria;
