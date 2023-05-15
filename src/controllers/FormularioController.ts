import { Request, Response } from 'express'
import * as jsonSchema from '../json/json-schema.json'


type JsonSchema = Record<string, any>


class FormularioController {

	obtenerDefinicion(req: Request, res: Response){

		const { formulario } = req.params
		const miEsquema: JsonSchema = jsonSchema


		if(miEsquema.definitions[formulario]){
			res.json(miEsquema.definitions[formulario])
		}else {
			res.status(400)
			res.json({error: `No se encontro el formilario ${formulario}`})
		}
	}
}


export default FormularioController