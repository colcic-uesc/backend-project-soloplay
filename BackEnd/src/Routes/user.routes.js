const { Router } = require("express");
const router = Router()
const AuthController = require("../Controller/auth.controller");
const authController = new AuthController()
const { authenticateJWT } = require('../Middlewares/auth');

//Buscar todas as conta
router.get("/user", authenticateJWT, async ( request, response ) => { await authController.findAllUser( request, response ) })
//Criar uma conta
router.post("/user", async (request, response) => { await authController.createUser( request, response ) })
// //Atualizar um conta
// router.put("/user", async (request, response) => { await authController.updateauth( request, response ) })
// //Deletar uma conta pelo id
router.delete("/user", authenticateJWT, async (request, response) => { await authController.deleteUserId( request, response ) })

module.exports = router
