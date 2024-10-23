const { Router } = require("express");
const router = Router()
const TeacherController = require("../Controller/teacher.controller");
const teacherController = new TeacherController()

//Buscar todas as conta
router.get("/project", async ( request, response ) => { await teacherController.getAllProject( request, response ) })
//Criar uma conta
// router.post("/project", async (request, response) => { await teacherController.createTeacher( request, response ) })
// //Atualizar um conta
// router.put("/project", async ( request, response) => { await teacherController.updateTeacher( request, response ) })
// //Deletar uma conta pelo id
// router.delete("/project", async ( request, response) => { await teacherController.deleteTeacherId( request, response ) })

module.exports = router
