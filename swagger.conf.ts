import swaggerJSDoc from 'swagger-jsdoc'


export const swaggerOptions = {
	definition:{

		openapi: '3.0.0',
		info: {
			title: ' API de Citas Médicas, Doctores y Especialidades',
			version: '1.0.0',
			description: 'La API de gestión médica ofrece una solución completa para la gestión de citas, pacientes, doctores y especialidades médicas. Los usuarios pueden crear citas y asignar pacientes a los doctores según su especialidad. Además, pueden listar y crear pacientes, doctores y especialidades. La API utiliza Prisma como ORM para la persistencia de los datos y se implementa en TypeScript. Es adecuada para cualquier aplicación de gestión médica que necesite una solución escalable y fácil de usar para la gestión de pacientes y citas médicas.',
		},

		servers: [
			{
				url: 'http://127.0.0.1:3000',
				description: 'Servidor local de documentacion'
			}
		]
	},

	apis: ['src/index.ts', './swagger/*.swagger.ts']

}

export const swaggerSpec=swaggerJSDoc(swaggerOptions)