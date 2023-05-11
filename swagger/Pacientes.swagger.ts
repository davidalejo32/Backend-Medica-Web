export default {
	/**
    * @swagger
    *
    * /pacientes:
    *   get:
    *     summary: Obtener listado de pacientes
    *     tags:
    *       - Pacientes
    *     responses:
    *       200:
    *         description: Datos de todos los pacientes
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 type: object
    *                 properties:
    *                   cedula:
    *                     type: integer
    *                     description: Numero de cedular del paciente
    *                   nombre:
    *                     type: string
    *                     description: Nombre del paciente
    *                   apellido:
    *                     type: string
    *                     description: Apellido del paciente
    *                   fecha_nacimiento:
    *                     type: string
    *                     description: Fecha de nacimiento del paciente
    *                   telefono:
    *                     type: string
    *                     description: Numero de telefono del paciente
    *
    * /crear_paciente:
    *     post:
    *       summary: Crear un Paciente
    *       tags:
    *         - Pacientes
    *       requestBody:
    *         description: Datos del paciente a crear
    *         required: true
    *         content:
    *           application/json:
    *             schema:
    *               type: object
    *               properties:
    *                 cedula:
    *                   type: integer
    *                   description: Numero de cedular del paciente
    *                 nombre:
    *                   type: string
    *                   description: Nombre del paciente
    *                 apellido:
    *                   type: string
    *                   description: Apellido del paciente
    *                 fecha_nacimiento:
    *                   type: string
    *                   description: Fecha de nacimiento del paciente con el siguiente formato 31/05/1999
    *                 telefono:
    *                   type: string
    *                   description: Numero de telefono del paciente
    *               required:
    *                 - cedula
    *                 - nombre
    *                 - apellido
    *                 - fecha_nacimiento
    *                 - telefono
    *       responses:
    *         200:
    *           description: Json de la creacion del paciente
    *           content:
    *             application/json:
    *               schema:
    *                 type: object
    *                 properties:
    *                   cedula:
    *                     type: integer
    *                     description: Numero de cedular del paciente
    *                   nombre:
    *                     type: string
    *                     description: Nombre del paciente
    *                   apellido:
    *                     type: string
    *                     description: Apellido del paciente
    *                   fecha_nacimiento:
    *                     type: string
    *                     description: Fecha de nacimiento del paciente 
    *                   telefono:
    *                     type: string
    *                     description: Numero de telefono del paciente
    */
}
 