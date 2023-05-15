/**
 * Importacion de los archivos necesarios y rutas
 */

import express from 'express'
import cors from 'cors'

import PacienteRouter from './routes/Paciente.routes'
import DoctorRouter from './routes/Doctor.routes'
import EspecialidadRouter from './routes/Especialidad.routes'
import CitaRouter from './routes/Cita.routes'
import FormularioRoutes from './routes/Formulario.routes'

import swaggerUI from 'swagger-ui-express'
import { swaggerSpec } from '../swagger.conf'


/**
 * Clase principal que representa la aplicación.
 * @class
 */

class App {
  
	/**
	 * Atributos de la clase App 
	 */

	public app:any
	private server: any
	public pacienteRouter: any
	public doctorRouter: any
	public especialidadRouter: any
	public citaRouter: any
	public formularioRouter: any


	/**
	 * Crea una instancia de la aplicación y configura los middleware necesarios.
	 * @constructor
	 */

	constructor(){
		this.app = express()
		this.app.use(express.json())
		this.app.use(cors())
		this.routes()

		this.app.use(
			'/api-docs',
			swaggerUI.serve,
			swaggerUI.setup(swaggerSpec)
		)
	}


	/**
   * Configura las rutas de la API.
   * @returns {void}
   */

	private routes ():any {
		// Instancia los routers para cada entidad.
		this.pacienteRouter = new PacienteRouter().router
		this.doctorRouter = new DoctorRouter().router
		this.especialidadRouter = new EspecialidadRouter().router
		this.citaRouter = new CitaRouter().router
		this.formularioRouter = new FormularioRoutes().router

		// Configura las rutas para cada router.
		this.app.use('/', this.pacienteRouter)
		this.app.use('/', this.doctorRouter)
		this.app.use('/', this.especialidadRouter)
		this.app.use('/', this.citaRouter)
		this.app.use('/', this.formularioRouter)
	}

	/**
   * Inicia el servidor.
   * @returns {void}
   */

	public start ():void {
		this.server = this.app.listen(3000, ()=>{
			console.log('El servidor esta escuchando en el puerto 3000')
		})
	}

	/**
   * Cierra la conexión del servidor.
   * @returns {void}
   */

	public close ():void {
		this.server.close()
	}

}

export default App