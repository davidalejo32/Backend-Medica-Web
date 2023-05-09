import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

class PacienteController {
	private prismaCliente: PrismaClient

	constructor(){
		this.prismaCliente = new PrismaClient()
	}

	async listarPaciente (req: Request, res: Response) {
		try {
			const pacientes = await this.prismaCliente.paciente.findMany()
			res.json(pacientes)
		} catch (error:any) {
			res.status(400)
			res.json({error: error.message})
		}
	}

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