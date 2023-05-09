import request from 'supertest'
import App from '../src/App'


describe('GET /pacientes', ()=>{

	let app: App

	beforeAll(()=>{
		app = new App()
		app.start()
	})

	afterAll(()=>{
		app.close()
	})

	test('La respuesta debe ser un objeto JSON, su estatus debe ser 200 y debe contener las siguientes caracteristicas, cedula, nombre, apellido, fecha_nacimiento y telefono', async()=>{

		const res = await request(app.app).get('/pacientes')
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		res.body.forEach((paciente: any)=>{
			expect(paciente).toHaveProperty('cedula')
			expect(paciente).toHaveProperty('nombre')
			expect(paciente).toHaveProperty('apellido')
			expect(paciente).toHaveProperty('fecha_nacimiento')
			expect(paciente).toHaveProperty('telefono')
		})
	})

})