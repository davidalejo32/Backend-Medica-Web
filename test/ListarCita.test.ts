import request from 'supertest'
import App from '../src/App'


describe('GET /citas', ()=>{

	let app: App

	beforeAll(()=>{
		app = new App()
		app.start()
	})

	afterAll(()=>{
		app.close()
	})

	test('La solicitud GET a /listar_citas debe devolver un objeto JSON con un estatus 200 que contiene una lista de todas las citas almacenadas en la base de datos de la aplicación. Cada cita debe incluir la información del paciente y del doctor asociado. Si no hay citas almacenadas, se debe devolver una lista vacía.', async()=>{
    
		const res = await request(app.app).get('/citas')
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		res.body.forEach((cita:any) => {
		  expect(cita).toHaveProperty('idCita')
		  expect(cita).toHaveProperty('pacienteCedula')
		  expect(cita).toHaveProperty('idDoctor')
		})
	})

})