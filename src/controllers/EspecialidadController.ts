import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'


class EspecialidadController {

	prismaCliente : PrismaClient

	constructor(){
		this.prismaCliente = new PrismaClient()
	}

	async listarEspecialidades(req: Request, res:Response) {
		try {
			const especialidades = await this.prismaCliente.especialidad.findMany()
			res.json(especialidades)
		} catch (error:any) {
			res.json({error: error.message})
		}
	}

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