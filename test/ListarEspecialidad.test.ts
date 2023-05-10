import request from 'supertest'
import App from '../src/App'


describe('GET /especialidad', ()=>{

	let app: App

	beforeAll(()=>{
		app = new App()
		app.start()
	})

	afterAll(()=>{
		app.close()
	})

	test('La respuesta a la solicitud GET a /especialidad/:id debe ser un objeto JSON con un estatus 200 si se proporciona un ID válido de especialidad. El objeto JSON debe contener los datos de la especialidad correspondiente al ID proporcionado, representada por un objeto con las siguientes propiedades: idEspecialidad (número), nombre (cadena de texto) y descripcion (cadena de texto)', async()=>{
    
		const res = await request(app.app).get('/especialidad/1')
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		expect(res.body).toHaveProperty('idEspecialidad')
		expect(res.body).toHaveProperty('nombre')
    
	})

})