import { Router, Request, Response } from 'express'
import PacienteController from '../controllers/PacienteController'


/**
 * Router para las operaciones de Paciente.
 * @class
 */
class PacienteRouter {
	
	/**
  * Definicion de tipos de atributos
  */

	router: Router
	pacienteController: PacienteController


	/**
   * Crea una instancia del enrutador de Paciente y del controlador y ejecuta el metodo routes.
   * @constructor
   */

	constructor(){
		this.router = Router()
		this.pacienteController = new PacienteController()
		this.routes()
	}

	/**
   * Configura las rutas para el enrutador de paciente.
   * @private
   */

	private routes():void{

		/**
     * Obtiene una lista de todos los pacientes.
     * @route GET /pacientes
     * @returns Una lista de todos los pacientes en formato JSON.
     * @throws {Error} Si hay algún problema al obtener los pacientes.
     */

		this.router.get('/pacientes', (req:Request, res:Response)=>{
			this.pacienteController.listarPaciente(req, res)
		})


		/**
     * Crea un nuevo paciente
     * @route POST /crear_paciente
     * @param {paciente} body.body - La información de la cita a crear.
     * @returns El paciente creado en formato JSON.
     * @throws {Error} Si hay algún problema al crear la paciente.
     */

		this.router.post('/crear_paciente', (req:Request, res:Response)=>{
			this.pacienteController.crearPaciente(req, res)
		})

	}

}


export default PacienteRouter
