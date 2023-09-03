/*

Pasos para hacer el proyecto: Todo esto ya teniendo el codigo HTML ya listo y CSS.

- Instalamos y configuramos rollup:
Vamos a usar rollup para poder compilar nuestro código JavaScript en uno solo.

Creamo nuestro package.json:
npm init -y

Istalamos rollup: recuerda lo instalamos de manera local en el proyecto:
https://rollupjs.org/tutorial/#installing-rollup-locally

npm install rollup --save-dev

Ahora vamos a configurar rollup: Vemos la documentación:
https://rollupjs.org/tutorial/#using-config-files

Creamos un archivo llamado rollup.config.js:

// rollup.config.mjs
export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	}
};

Creamos la carpeta src. Y dentro del archivo ponemos el archivo de index.js

Hacemos ajustes al codigo de la configuración de rollup:

// rollup.config.mjs
export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
  },
};

Ahora en nuestro archivo package.json para poder usar la manera de exportar de ESModules debemos agregar una propiedad:

"type": "module",

{
  "name": "galeria-imagenes-javascript",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "rollup": "^3.28.1"
  }
}

Ahora vamos a crear los script para poder compilar con rollup en package.json:

"build": "rollup --watch --config"

{
  "name": "galeria-imagenes-javascript",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rollup --watch --config"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "rollup": "^3.28.1"
  }
}

Ahora ya podemos compilar:

npm run build

Listo.. Ya tenemos la configuración inicial ya podemos poder a crear nuestro código de JavaScript.

Ahora lo que debemos es relacionar el archivo ya compilado con nuestro index.html.

*/
