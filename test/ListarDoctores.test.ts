import request from 'supertest'
import App from '../src/App'


describe('GET /doctores', ()=>{

	let app: App

	beforeAll(()=>{
		app = new App()
		app.start()
	})

	afterAll(()=>{
		app.close()
	})

	test('La función listarDoctores debe recuperar todos los registros de doctores almacenados en la base de datos de la aplicación. La respuesta debe ser un objeto JSON con un estatus 200 que incluya un array de objetos con los detalles de cada uno de los doctores.', async()=>{
    
		const res = await request(app.app).get('/doctores')
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