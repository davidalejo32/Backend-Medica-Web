import request from 'supertest'
import App from '../src/App'

describe('POST /crear_especialidad', ()=>{
	let app : App



	beforeAll(()=>{
		app = new App()

		app.start()
	})


	afterAll(()=>{
		app.close()
	})

	test('La solicitud POST a /especialidades debe crear una nueva especialidad en la base de datos de la aplicación. La solicitud debe incluir un objeto JSON con la propiedad "nombre" (cadena de texto) que describe el nombre de la especialidad. La respuesta debe ser un objeto JSON con un estatus 200 que incluye las propiedades de la especialidad recién creada, incluyendo su "idEspecialidad".', async()=>{
		const especialidad = {
			nombre: 'Medicina General',
		}

		const res = await request(app.app).post('/crear_especialidad').send(especialidad)
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		expect(res.body).toHaveProperty('idEspecialidad')
		expect(res.body).toHaveProperty('nombre')

	} )

})