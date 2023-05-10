import request from 'supertest'
import App from '../src/App'


describe('GET /especialidades', ()=>{

	let app: App

	beforeAll(()=>{
		app = new App()
		app.start()
	})

	afterAll(()=>{
		app.close()
	})

	test('La respuesta a la solicitud GET a /especialidades debe ser un objeto JSON con un estatus 200. El objeto JSON debe contener una lista de todas las especialidades disponibles en la base de datos de la aplicación, cada una representada por un objeto con las siguientes propiedades: idEspecialidad (número), nombre (cadena de texto) y descripcion (cadena de texto). Si no hay especialidades disponibles, la lista debe estar vacía.', async()=>{
    
		const res = await request(app.app).get('/especialidades')
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		res.body.forEach((especialidad: any)=>{
			expect(especialidad).toHaveProperty('idEspecialidad')
			expect(especialidad).toHaveProperty('nombre')
		})
	})

})