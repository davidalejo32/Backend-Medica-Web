import request from 'supertest'
import App from '../src/App'

describe('POST /crear_cita', ()=>{
	let app : App



	beforeAll(()=>{
		app = new App()

		app.start()
	})


	afterAll(()=>{
		app.close()
	})

	test('La solicitud POST a /crear_cita debe crear una nueva cita en la base de datos de la aplicación. La solicitud debe incluir un objeto JSON con las propiedades "pacienteCedula" y "idDoctor" que describen la cédula del paciente y el identificador del doctor respectivamente. La respuesta debe ser un objeto JSON con un estatus 200 que incluye las propiedades de la cita recién creada.', async()=>{
		const cita = {
			nombre: 1007401177,
			idEspecialidad: 3,
		}

		const res = await request(app.app).post('/crear_cita').send(cita)
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		expect(res.body).toHaveProperty('pacienteCedula', res.body.pacienteCedula)
		expect(res.body).toHaveProperty('idDoctor', res.body.idDoctor)

	} )

})