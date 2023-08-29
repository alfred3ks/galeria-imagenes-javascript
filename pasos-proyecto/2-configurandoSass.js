/*
Configurando Sass en este proyecto:
Vamos a ver como podemos compilar las archivos de sass del proyecto.
Esto es una explicación adicional porque ya tenemos el archivo compilado en public: bundle.css

Esta bien aprederlo para saber como compilar archivos de sass.

Procedemos a instalar sass:
Vamos a su documentación:

https://sass-lang.com/guide/
https://sass-lang.com/install/

Haremos la instalación mediante Node.js: Instalamos de forma global:

npm install -g sass

Ahora vamos al package.json y agregamos un nuevo script:

"sass": "sass --watch --style=compressed sass/index.scss public/bundle.css"

{
  "name": "galeria-imagenes-javascript",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rollup --watch --config",
    "sass": "sass --watch --style=compressed sass/index.scss public/bundle.css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "rollup": "^3.28.1"
  }
}

Ahora ejecutamos el script:

npm run sass

Cada vez que hagamos un cambios en nuestros de .scss se compilara nuestro código.

*/
