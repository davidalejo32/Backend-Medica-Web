import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'


// Controlador para manejar las solicitudes relacionadas con los pacientes médicos.
class PacienteController {

	
	// Atributos de la clase, usados para decir que el atributo prismaCliente va a ser de tipo PrismaClient.
	private prismaCliente: PrismaClient

	
	//Crea una instancia de PrismaClient.
	constructor(){
		this.prismaCliente = new PrismaClient()
	}


	/**
	 * Manejador para la solicitud GET a /pacientes.
	 * Devuelve una lista de todos los pacientes médicos.
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async listarPaciente (req: Request, res: Response) {
		try {
			const pacientes = await this.prismaCliente.paciente.findMany()
			res.json(pacientes)
		} catch (error:any) {
			res.status(400)
			res.json({error: error.message})
		}
	}

	/**
	 * Manejador para la solicitud POST a /crear_paciente
	 * Crea un nuevo paciente médico con los siguientes datos, cedula, nombre apellido, fecha_nacimiento, telefono
	 * @function
	 * @async
	 * @param {Request} req - Objeto de solicitud de Express.
	 * @param {Response} res - Objeto de respuesta de Express.
	 * @returns {Promise<void>}
	 */

	async crearPaciente (req: Request, res: Response) {

		try {
			const { cedula, nombre, apellido, fecha_nacimiento, telefono } = req.body
			const fecha = new Date(fecha_nacimiento)

			const paciente = await this.prismaCliente.paciente.create(
				{
					data: {
						cedula, nombre, apellido, fecha_nacimiento: fecha, telefono
					}
				}
			)

			res.json(paciente)

		} catch (error:any) {
			res.status(400)
			res.json({error:error.message})
		}

	}

}

export default PacienteController