export default {
	/**
   * 
   * @swagger
   * 
   * /citas:
   *   get:
   *     summary: Obtener listado de todas las citas
   *     tags:
   *       - Citas
   *     responses:
   *       200:
   *         description: Datos de todas las citas
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   idCita:
   *                     type: integer
   *                     description: Id de la cita
   *                   pacienteCedula:
   *                     type: integer
   *                     description: Cedula del paciente
   *                   idDoctor:
   *                     type: integer
   *                     description: Id del doctor al cual se va a asignar a la cita
   * 
   * 
   * /crear_cita:
   *   post:
   *     summary: Crear una cita
   *     tags:
   *       - Citas
   *     requestBody:
   *       description: Datos de la cita a crear
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               pacienteCedula:
   *                 type: integer
   *                 description: Cedula del paciente
   *               idDoctor:
   *                 type: integer
   *                 description: Id del doctor al cual se va a asignar a la cita
   *     responses:
   *       200:
   *         description: Json de la creacion de la cita
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 idCita:
   *                   type: integer
   *                   description: Id de la cita
   *                 pacienteCedula:
   *                   type: integer
   *                   description: Cedula del paciente
   *                 idDoctor:
   *                   type: integer
   *                   description: Id del doctor al cual se va a asignar a la cita
   *               
   */
}