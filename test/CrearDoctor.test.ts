import request from 'supertest'
import App from '../src/App'

describe('POST /crear_doctor', ()=>{
	let app : App



	beforeAll(()=>{
		app = new App()

		app.start()
	})


	afterAll(()=>{
		app.close()
	})

	test('La solicitud POST a /crear_doctor debe crear un nuevo doctor en la base de datos de la aplicación. La solicitud debe incluir un objeto JSON que contenga las propiedades "nombre" (cadena de texto), "apellido" (cadena de texto), "consultorio" (cadena de texto), "correo" (cadena de texto) y "idEspecialidad" (número entero) que describe la especialidad del médico. La respuesta debe ser un objeto JSON con un estatus 200 que incluya las propiedades del doctor recién creado, incluyendo su "idDoctor"', async()=>{
		const doctor = {
			nombre: 'Ivanna Milena',
			apellido: 'Pulido Quesada',
			consultorio: 5,
			correo: 'ipuludo@gmail.com',
			idEspecialidad: 1,
		}

		const res = await request(app.app).post('/crear_doctor').send(doctor)
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		expect(res.body).toHaveProperty('nombre', res.body.nombre)
		expect(res.body).toHaveProperty('apellido', res.body.apellido)
		expect(res.body).toHaveProperty('consultorio', res.body.consultorio)
		expect(res.body).toHaveProperty('correo', res.body.correo)
		expect(res.body).toHaveProperty('idEspecialidad', res.body.idEspecialidad)

	} )

})