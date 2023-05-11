import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

class CitaController {

	private prismaCliente : PrismaClient

	constructor(){
		this.prismaCliente = new PrismaClient()
	}


	async listarCitas(req: Request, res: Response) {
		try {
      
			const citas = await this.prismaCliente.cita.findMany()

			res.json(citas)

		} catch (error:any) {
			res.json({error: error.message})
		}
	}

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
