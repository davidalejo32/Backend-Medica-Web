import { Router, Request, Response } from 'express'
import CitaController from '../controllers/CitaController'


/**
 * Router para las operaciones de citas.
 * @class
 */

class CitaRouter{

	/**
  * Definicion de tipos de atributos
  */
	router : Router
	citaController : CitaController


	/**
   * Crea una instancia del enrutador de citas y del controlador y ejecuta el metodo routes.
   * @constructor
   */

	constructor(){
		this.router = Router()
		this.citaController = new CitaController()
		this.routes()
	}

	/**
   * Configura las rutas para el enrutador de citas.
   * @private
   */

	private routes():void{

		/**
     * Obtiene una lista de todas las citas.
     * @route GET /citas
     * @returns Una lista de todas las citas en formato JSON.
     * @throws {Error} Si hay algún problema al obtener las citas.
     */

		this.router.get('/citas', (req:Request, res:Response)=>{
			this.citaController.listarCitas(req, res)
		})

		/**
     * Crea una nueva cita.
     * @route POST /crear_cita
     * @param {Cita} body.body - La información de la cita a crear.
     * @returns La cita creada en formato JSON.
     * @throws {Error} Si hay algún problema al crear la cita.
     */

		this.router.post('/crear_cita', (req:Request, res:Response)=>{
			this.citaController.crearCita(req, res)
		})

	}


}

export default CitaRouter