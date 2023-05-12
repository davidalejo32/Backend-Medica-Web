import { Router, Response, Request } from 'express'
import EspecialidadController from '../controllers/EspecialidadController'

/**
 * Router para las operaciones de Especialidad.
 * @class
 */

class EspecialidadRouter {

	/**
  * Definicion de tipos de atributos
  */

	router: Router
	especialidadController : EspecialidadController

	/**
   * Crea una instancia del enrutador de especialidad y del controlador y ejecuta el metodo routes.
   * @constructor
   */

	constructor(){

		this.router = Router()
		this.especialidadController = new EspecialidadController()
		this.routes()
	}

	/**
   * Configura las rutas para el enrutador de especialidad.
   * @private
   */

	private routes ():void {

		/**
     * Obtiene una lista de todas las especialidades.
     * @route GET /especialidades
     * @returns Una lista de todas las especialidades en formato JSON.
     * @throws {Error} Si hay algún problema al obtener las especialidades.
     */

		this.router.get('/especialidades', (req: Request, res: Response)=>{
			this.especialidadController.listarEspecialidades(req, res)
		})

		/**
     * Obtiene un objeto de la especialidad.
     * @route GET /especialidades/:id
     * @returns Un objeto la especialidad en formato JSON.
     * @throws {Error} Si hay algún problema al obtener la especialidad.
     */

		this.router.get('/especialidades/:id', (req: Request, res: Response)=>{
			this.especialidadController.listarEspecialidadesID(req, res)
		})


		/**
     * Crea una nueva Especialidad.
     * @route POST /crear_especialidad
     * @param {especialidad} body.body - La información de la especialidad a crear.
     * @returns La especialidad creada en formato JSON.
     * @throws {Error} Si hay algún problema al crear la especialidad.
     */

		this.router.post('/crear_especialidad', (req: Request, res: Response)=>{
			this.especialidadController.crearEspecialidad(req, res)
		})
	}

}

export default EspecialidadRouter