import DoctorController from '../controllers/DoctorController'
import { Router, Request, Response } from 'express'


class DoctorRouter {

	router : Router
	doctorController :  DoctorController

	constructor() {
		this.router = Router()
		this.doctorController = new DoctorController()
		this.routes()
	}


	private routes(): void {

		this.router.get('/doctores', (req: Request, res: Response)=>{
			this.doctorController.listarDoctores(req, res)
		})
    
		this.router.get('/doctores/:id', (req: Request, res: Response)=>{
			this.doctorController.listarDoctoresID(req, res)
		})

		this.router.post('/crear_doctor', (req: Request, res: Response)=>{
			this.doctorController.crearDoctor(req, res)
		})

	}

}

export default DoctorRouter