import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

/**
 * Controlador para manejar las solicitudes relacionadas con las especialidades médicas.
 * @class
 */
class EspecialidadController {

	/**
	 * Atributos de la clase, usados para decir que el atributo prismaCliente va a ser de tipo PrismaClient.
	 */

	prismaCliente : PrismaClient


	/**
	 * Crea una instancia de PrismaClient.
	 * @constructor
	 */

	constructor(){
		this.prismaCliente = new PrismaClient()
	}


	/**
	 * Manejador para la solicitud GET a /especialidades.
	 * Devuelve una lista de todas las especialidades médicas.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async listarEspecialidades(req: Request, res:Response) {
		try {
			const especialidades = await this.prismaCliente.especialidad.findMany()
			res.json(especialidades)
		} catch (error:any) {
			res.json({error: error.message})
		}
	}

	/**
	 * Manejador para la solicitud GET a /especialidades/:id.
	 * Devuelve una especialidad médica específica según el ID proporcionado.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async listarEspecialidadesID(req: Request, res: Response){
		try {

			const { id } = req.params
			const especialidad = await this.prismaCliente.especialidad.findUnique({
				where:{
					idEspecialidad: parseInt(id)
				}
			})

			res.json(especialidad)
		} catch (error:any) {
			res.json({error: error.message})
		}
	}


	/**
	 * Manejador para la solicitud POST a /crear_especialidad.
	 * Crea una nueva especialidad médica con el nombre proporcionado.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async crearEspecialidad (req: Request, res: Response){
		try {
			const {nombre} = req.body

			const especialidad = await this.prismaCliente.especialidad.create({
				data: {
					nombre
				}
			})

			res.json(especialidad)

		} catch (error:any) {
			res.json({error: error.message})
      
		}
	}

}

export default EspecialidadController