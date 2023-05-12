import DoctorController from '../controllers/DoctorController'
import { Router, Request, Response } from 'express'

/**
 * Router para las operaciones de Doctor.
 * @class
 */

class DoctorRouter {
	
	/**
  * Definicion de tipos de atributos
  */

	router : Router
	doctorController :  DoctorController

	/**
   * Crea una instancia del enrutador de Doctor y del controlador y ejecuta el metodo routes.
   * @constructor
   */

	constructor() {
		this.router = Router()
		this.doctorController = new DoctorController()
		this.routes()
	}


	/**
   * Configura las rutas para el enrutador de citas.
   * @private
   */

	private routes(): void {

		/**
     * Obtiene una lista de todos los doctores.
     * @route GET /doctores
     * @returns Una lista de todas los doctores en formato JSON.
     * @throws {Error} Si hay algún problema al obtener los doctores.
     */

		this.router.get('/doctores', (req: Request, res: Response)=>{
			this.doctorController.listarDoctores(req, res)
		})

		
		/**
     * Obtiene un objeto del doctor cuya especialidad sea el id que se pasa por parametro.
     * @route GET /doctores/:id
     * @returns Un objeto del doctor en formato JSON.
     * @throws {Error} Si hay algún problema al obtener el doctor.
     */

		this.router.get('/doctores/:id', (req: Request, res: Response)=>{
			this.doctorController.listarDoctoresID(req, res)
		})


		/**
     * Crea un nuevo doctor.
     * @route POST /crear_doctor
     * @param {doctor} body.body - La información del doctor a crear.
     * @returns el doctor creado en formato JSON.
     * @throws {Error} Si hay algún problema al crear el doctor.
     */

		this.router.post('/crear_doctor', (req: Request, res: Response)=>{
			this.doctorController.crearDoctor(req, res)
		})

	}

}

export default DoctorRouter