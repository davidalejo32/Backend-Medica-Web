import request from 'supertest'
import App from '../src/App'

describe('POST /crear_paciente', ()=>{
	let app : App



	beforeAll(()=>{
		app = new App()

		app.start()
	})


	afterAll(()=>{
		app.close()
	})

	test('La prueba debe verificar que el endpoint de creación de pacientes devuelva una respuesta válida en formato JSON. La respuesta debe contener los siguientes campos: cédula, nombre, apellido, fecha de nacimiento y teléfono. Además, la respuesta debe tener un código de estado HTTP 200 para indicar que la creación del paciente se ha realizado correctamente. Se probará que se haya creado el paciente correctamente en la base de datos a través de un mock de la capa de datos', async()=>{
		const paciente = {
			cedula: 1234467,
			nombre: 'Juan',
			apellido: 'Pérez',
			fecha_nacimiento: '01-01-1980',
			telefono: '555-5555',
		}

		const res = await request(app.app).post('/crear_paciente').send(paciente)
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		expect(res.body).toHaveProperty('cedula', paciente.cedula)
		expect(res.body).toHaveProperty('nombre', paciente.nombre)
		expect(res.body).toHaveProperty('apellido', paciente.apellido)
		expect(res.body).toHaveProperty('fecha_nacimiento', '1980-01-01T05:00:00.000Z')
		expect(res.body).toHaveProperty('telefono', paciente.telefono)

	} )

})