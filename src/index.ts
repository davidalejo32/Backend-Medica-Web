import App from './App'

/**
 * Clase que inicializa la aplicación y la pone en ejecución
 *
 * @remarks
 * Crea una instancia de la clase `App`, la cual es la encargada de inicializar
 * el servidor web y agregar las rutas correspondientes a la API. Luego, pone
 * en ejecución el servidor en el puerto 3000.
 *
 * @example
 * ```typescript
 * const app = new AppServer();
 * app.start();
 * ```
 */

const app = new App()


/**
 * Incia el servidor con el objeto creado de la clase App
 * 
 */

app.start()