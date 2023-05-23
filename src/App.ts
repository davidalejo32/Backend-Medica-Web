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
import AuthRouter from './routes/Auth.routes'
import miEstrategia from './config/passport'



import swaggerUI from 'swagger-ui-express'
import { swaggerSpec } from '../swagger.conf'
import passport from 'passport'


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
	public authRouter: any


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
		this.authRouter = new AuthRouter().router

		// Configura las rutas para cada router.
		this.app.use('/', this.authRouter)
		passport.use(miEstrategia)
		this.app.use(passport.initialize())
		this.app.use('/', passport.authenticate('jwt', {session:false}), this.pacienteRouter)
		this.app.use('/', passport.authenticate('jwt', {session:false}), this.doctorRouter)
		this.app.use('/', passport.authenticate('jwt', {session:false}), this.especialidadRouter)
		this.app.use('/', passport.authenticate('jwt', {session:false}), this.citaRouter)
		this.app.use('/', passport.authenticate('jwt', {session:false}), this.formularioRouter)
		this.app.use('/', passport.authenticate('jwt', {session:false}), this.authRouter)
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