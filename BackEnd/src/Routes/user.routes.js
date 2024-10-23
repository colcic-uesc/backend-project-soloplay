const { Router } = require("express");
const router = Router()
const AuthController = require("../Controller/auth.controller");
const authController = new AuthController()

//Buscar todas as conta
router.get("/user", async ( request, response ) => { await authController.findAllUser( request, response ) })
//Criar uma conta
router.post("/user", async (request, response) => { await authController.createUser( request, response ) })
// //Atualizar um conta
// router.put("/user", async (request, response) => { await authController.updateauth( request, response ) })
// //Deletar uma conta pelo id
// router.delete("/user", async (request, response) => { await authController.deleteStudentId( request, response ) })

module.exports = router
