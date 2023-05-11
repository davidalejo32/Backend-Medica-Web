import express from 'express'
import cors from 'cors'

import PacienteRouter from './routes/Paciente.routes'
import DoctorRouter from './routes/Doctor.routes'
import EspecialidadRouter from './routes/Especialidad.routes'
import CitaRouter from './routes/Cita.routes'

import swaggerUI from 'swagger-ui-express'
import { swaggerSpec } from '../swagger.conf'

class App {
  
	public app:any
	private server: any
	public pacienteRouter: any
	public doctorRouter: any
	public especialidadRouter: any
	public citaRouter: any



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


	private routes ():any {
		this.pacienteRouter = new PacienteRouter().router
		this.doctorRouter = new DoctorRouter().router
		this.especialidadRouter = new EspecialidadRouter().router
		this.citaRouter = new CitaRouter().router


		this.app.use('/', this.pacienteRouter)
		this.app.use('/', this.doctorRouter)
		this.app.use('/', this.especialidadRouter)
		this.app.use('/', this.citaRouter)
	}

	public start ():void {
		this.server = this.app.listen(3000, ()=>{
			console.log('El servidor esta escuchando en el puerto 3000')
		})
	}

	public close ():void {
		this.server.close()
	}

}

export default App