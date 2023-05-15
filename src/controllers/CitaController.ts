import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

/**
 * Controlador para manejar las solicitudes relacionadas con las citas
 * @class
 */

class CitaController {

	/**
	 * Atributos de la clase, usados para decir que el atributo prismaCliente va a ser de tipo PrismaClient.
	 */

	private prismaCliente : PrismaClient

	/**
	 * Crea una instancia de PrismaClient.
	 * @constructor
	 */

	constructor(){
		this.prismaCliente = new PrismaClient()
	}

	/**
	 * Manejador para la solicitud GET a /citas.
	 * Devuelve una lista de todas las citas.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async listarCitas(req: Request, res: Response) {
		try {
      
			const citas = await this.prismaCliente.cita.findMany()

			res.json(citas)

		} catch (error:any) {
			res.json({error: error.message})
		}
	}

	/**
	 * Manejador para la solicitud POST a /crear_cita.
	 * Crea una nueva cita médica con los datos proporcionados, cedula del paciente y Id del doctor.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async crearCita(req: Request, res: Response) {
		try {
      
			const { pacienteCedula, idDoctor } = req.body

			const cita = await this.prismaCliente.cita.create(
				{
					data: {
						pacienteCedula,
						idDoctor
					}
				}
			)

			res.json(cita)

		} catch (error:any) {
			res.json({error: error.message})
		}
	}


}

export default CitaController
