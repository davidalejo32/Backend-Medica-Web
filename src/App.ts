import express from 'express'
import cors from 'cors'

import PacienteRouter from './routes/Paciente.routes'
import DoctorRouter from './routes/Doctor.routes'
import EspecialidadRouter from './routes/Especialidad.routes'

class App {
  
	public app:any
	private server: any
	public pacienteRouter: any
	public doctorRouter: any
	public especialidadRouter: any

	constructor(){
		this.app = express()
		this.app.use(express.json())
		this.app.use(cors())
		this.routes()
	}


	private routes ():any {
		this.pacienteRouter = new PacienteRouter().router
		this.doctorRouter = new DoctorRouter().router
		this.especialidadRouter = new EspecialidadRouter().router


		this.app.use('/', this.pacienteRouter)
		this.app.use('/', this.doctorRouter)
		this.app.use('/', this.especialidadRouter)
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