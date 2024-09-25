const { Router } = require("express");
const router = Router()
const TeacherController = require("../Controller/teacher.controller");
const teacherController = new TeacherController()

//Buscar todas as conta
router.get("/teacher", async ( request, response ) => { await teacherController.getAllAccount( request, response ) })
//Criar uma conta
router.post("/teacher", async (request, response) => { await teacherController.createAccount( request, response ) })
//Atualizar um conta
router.put("/teacher", async ( request, response) => { await teacherController.updateAccount( request, response ) })
//Deletar uma conta pelo id
router.delete("/teacher", async ( request, response) => { await teacherController.deleteAccountId( request, response ) })

module.exports = router
