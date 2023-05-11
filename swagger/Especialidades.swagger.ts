export default {
	/**
	 * 
	 * @swagger
	 * 
	 * /especialidades:
	 *   get:
	 *     summary: Obtener listado de especialidades
	 *     tags:
	 *       - Especialidades
	 *     responses:
	 *       200:
	 *         description: Datos de todas las especialidades
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	 *               items:
	 *                 type: object
	 *                 properties:
	 *                   idEspecialidad:
	 *                     type: integer
	 *                     description: Id de la especialidad
	 *                   nombre:
	 *                     type: string
	 *                     description: Nombre de la especialidad
	 * 
	 * 
	 * /especialidades/{id}:
	 *   get:
	 *     summary: Obtener una especialidad por id
	 *     tags:
	 *       - Especialidades
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: integer
	 *         required: true
	 *         description: ID de la especialidad a obtener
	 *     responses:
	 *       200:
	 *         description: Datos de la especialidad solicitada
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 idEspecialidad:
	 *                   type: integer
	 *                   description: Id de la especialidad
	 *                 nombre:
	 *                   type: string
	 *                   description: Nombre de la especialidad
	 * 
	 * 
	 * /crear_especialidad:
	 *   post:
	 *     summary: Crear una especialidad
	 *     tags:
	 *       - Especialidades
	 *     requestBody:
	 *       description: Datos de la especialidad a crear
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               nombre:
	 *                 type: string
	 *                 description: Nombre de la especialidad
	 *             required:
	 *               - nombre
	 *     responses: 
	 *       200:
	 *         description: Json de la creación de la especialidad
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 idEspecialidad:
	 *                   type: integer
	 *                   description: Id de la especialidad
	 *                 nombre:
	 *                   type: string
	 *                   description: Nombre de la especialidad creada
	 * 
	 */
}
  