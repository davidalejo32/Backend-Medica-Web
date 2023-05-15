export default {
	/**
   * 
   * @swagger
   * 
   * /doctores:
   *   get:
   *     summary: Obtener listado de los doctores 
   *     tags:
   *       - Doctores
   *     responses:
   *       200:
   *         description: Datos de todos los doctores creados
   *         content:
   *           application/json:
   *             schema:
   *              type: array
   *              items:
   *                type: object
   *                properties:
   *                  idDoctor: 
   *                    type: integer
   *                    description: Id del doctor
   *                  nombre: 
   *                    type: string
   *                    description: Nombre del doctor
   *                  apellido: 
   *                    type: string
   *                    description: Apellido del doctor
   *                  consultorio: 
   *                    type: integer
   *                    description: Consultorio del doctor
   *                  correo: 
   *                    type: string
   *                    description: Correo del doctor
   *                  idEspecialidad: 
   *                    type: integer
   *                    description: Id del campo relacionado a la especialidad
   *  
   * 
   * /doctores/{id}:
   *   get:
   *     summary: Obtener los doctores que pertenecen a una especialidad
   *     tags:
   *       - Doctores
   *     parameters:
   *       - in: path
   *         name: id 
   *         schema:
   *           type: integer
   *         required: true
   *         description: Id de la especialidad a la que pertenecen los doctores
   *     responses:
   *       200:
   *         description: Datos de los doctores que pertenecen a la especialidad
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   idDoctor: 
   *                     type: integer
   *                     description: Id del doctor
   *                   nombre: 
   *                     type: string
   *                     description: Nombre del doctor
   *                   apellido: 
   *                     type: string
   *                     description: Apellido del doctor
   *                   consultorio: 
   *                     type: integer
   *                     description: Consultorio del doctor
   *                   correo: 
   *                     type: string
   *                     description: Correo del doctor
   *                   idEspecialidad: 
   *                     type: integer
   *                     description: Id del campo relacionado a la especialidad
   * 
   * 
   * /doctor/{id}:
   *   get:
   *     summary: Obtener un solo doctor por id 
   *     tags:
   *       - Doctores
   *     parameters:
   *       - in: path
   *         name: id 
   *         schema:
   *           type: integer
   *         required: true
   *         description: Id del doctor
   *     responses:
   *       200:
   *         description: Datos del doctor
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 idDoctor: 
   *                   type: integer
   *                   description: Id del doctor
   *                 nombre: 
   *                   type: string
   *                   description: Nombre del doctor
   *                 apellido: 
   *                   type: string
   *                   description: Apellido del doctor
   *                 consultorio: 
   *                   type: integer
   *                   description: Consultorio del doctor
   *                 correo: 
   *                   type: string
   *                   description: Correo del doctor
   *                 idEspecialidad: 
   *                   type: integer
   *                   description: Id del campo relacionado a la especialidad
   * 
   * 
   * /crear_doctor:
   *   post:
   *     summary: Crear un doctor
   *     tags:
   *       - Doctores
   *     requestBody:
   *       description: Datos del doctor a crear
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               nombre: 
   *                 type: string
   *                 description: Nombre del doctor
   *               apellido: 
   *                 type: string
   *                 description: Apellido del doctor
   *               consultorio: 
   *                 type: integer
   *                 description: Consultorio del doctor
   *               correo: 
   *                 type: string
   *                 description: Correo del doctor
   *               idEspecialidad: 
   *                 type: integer
   *                 description: Id del campo relacionado a la especialidad

   * 
   *     responses:
   *       200:
   *         description: Json de la creacion del doctor
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 idDoctor: 
   *                   type: integer
   *                   description: Id del doctor
   *                 nombre: 
   *                   type: string
   *                   description: Nombre del doctor
   *                 apellido: 
   *                   type: string
   *                   description: Apellido del doctor
   *                 consultorio: 
   *                   type: integer
   *                   description: Consultorio del doctor
   *                 correo: 
   *                   type: string
   *                   description: Correo del doctor
   *                 idEspecialidad: 
   *                   type: integer
   *                   description: Id del campo relacionado a la especialidad
   *                 
   */
}
