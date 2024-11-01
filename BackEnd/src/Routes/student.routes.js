const { Router } = require("express");
const router = Router()
const StudentController = require("../Controller/student.controller");
const studentController = new StudentController()
const { authenticateJWT } = require('../Middlewares/auth');

//Buscar todas as conta
router.get("/student", authenticateJWT, async ( request, response ) => { await studentController.findAllStudent( request, response ) })
//Criar uma conta
router.post("/student", authenticateJWT, async (request, response) => { await studentController.createStudent( request, response ) })
//Atualizar um conta
router.put("/student", authenticateJWT, async (request, response) => { await studentController.updateStudent( request, response ) })
//Deletar uma conta pelo id
router.delete("/student", authenticateJWT, async (request, response) => { await studentController.deleteStudentId( request, response ) })

module.exports = router
