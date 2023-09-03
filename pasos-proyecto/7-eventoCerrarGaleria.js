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

*/
