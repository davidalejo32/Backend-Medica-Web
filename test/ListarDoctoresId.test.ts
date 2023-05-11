import request from 'supertest'
import App from '../src/App'


describe('GET /doctores/2', ()=>{

	let app: App

	beforeAll(()=>{
		app = new App()
		app.start()
	})

	afterAll(()=>{
		app.close()
	})

	test('La solicitud GET a /doctores/:id debe retornar un objeto JSON con una lista de todos los doctores que pertenecen a una especialidad en particular. La solicitud debe incluir un parámetro de ruta con el nombre "id" que representa el idEspecialidad. La respuesta debe ser un objeto JSON con un estatus 200 que incluye la lista de doctores correspondiente a la especialidad consultada', async()=>{
    
		const res = await request(app.app).get('/doctores/2')
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		res.body.forEach((doctor:any) => {
		  expect(doctor).toHaveProperty('idDoctor')
		  expect(doctor).toHaveProperty('nombre')
		  expect(doctor).toHaveProperty('apellido')
		  expect(doctor).toHaveProperty('consultorio')
		  expect(doctor).toHaveProperty('correo')
		  expect(doctor).toHaveProperty('idEspecialidad')
		})
    
	})

})