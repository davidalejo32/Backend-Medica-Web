import { Request, Response } from 'express'
import { PrismaClient }  from '@prisma/client'


/**
 * Controlador para manejar las solicitudes relacionadas con los doctores
 * @class
 */

class DoctorController {

	/**
	 * Atributos de la clase, usados para decir que el atributo prismaCliente va a ser de tipo PrismaClient.
	 */
	private prismaClient : PrismaClient

	/**
	 * Crea una instancia de PrismaClient.
	 * @constructor
	 */

	constructor(){
		this.prismaClient = new PrismaClient()
	}


	/**
	 * Manejador para la solicitud GET a /doctores.
	 * Devuelve una lista de todos los doctores.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */


	async listarDoctores (req: Request, res:Response) {
		try {
			const doctores = await this.prismaClient.doctor.findMany()
			res.json(doctores)
		} catch (error:any) {
			res.json({error: error.message})
		}
	}

	/**
	 * Manejador para la solicitud GET a /doctores/:id.
	 * Devuelve un doctor de una especialidad médica específica según el ID proporcionado.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async listarDoctoresID (req: Request, res:Response) {
		try {
			
			const { id } = req.params
			
			const doctores = await this.prismaClient.doctor.findMany({
				where: {
					idEspecialidad: parseInt(id)
				}
			})

			res.json(doctores)
		} catch (error:any) {
			res.json({error: error.message})
		}
	}

	/**
	 * Manejador para la solicitud POST a /crear_doctor.
	 * Crea un nuevo doctor con los campos proporcionados, nombre, apellido, consultorio correo y idEspecialidad.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async crearDoctor (req: Request, res: Response) {
		try {
			const { nombre, apellido, consultorio, correo, idEspecialidad } = req.body 

			const doctor = await this.prismaClient.doctor.create(
				{
					data: {
						nombre, 
						apellido, 
						consultorio, 
						correo,
						idEspecialidad: parseInt(idEspecialidad)
					}
				}
			)

			res.json(doctor)

		} catch (error:any) {
			res.json({error: error.message})
		}
	}

}

export default DoctorController