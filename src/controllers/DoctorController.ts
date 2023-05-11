import { Request, Response } from 'express'
import { PrismaClient }  from '@prisma/client'

class DoctorController {
	private prismaClient : PrismaClient

	constructor(){
		this.prismaClient = new PrismaClient()
	}


	async listarDoctores (req: Request, res:Response) {
		try {
			const doctores = await this.prismaClient.doctor.findMany()
			res.json(doctores)
		} catch (error:any) {
			res.json({error: error.message})
		}
	}

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