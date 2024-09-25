const { Router } = require("express");
const router = Router()
const StudentController = require("../Controller/student.controller");
const studentController = new StudentController()

//Buscar todas as conta
router.get("/student", async ( request, response ) => { await studentController.getAllStudent( request, response ) })
//Criar uma conta
router.post("/student", async (request, response) => { await studentController.createStudent( request, response ) })
//Atualizar um conta
router.put("/student", async (request, response) => { await studentController.updateStudent( request, response ) })
//Deletar uma conta pelo id
router.delete("/student", async (request, response) => { await studentController.deleteStudentId( request, response ) })

module.exports = router
