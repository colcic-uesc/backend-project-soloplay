const { Router } = require("express");
const router = Router()
const RelationshipController = require("../Controller/relationship.controller");
const relationshipController = new RelationshipController()
const { authenticateJWT } = require('../Middlewares/auth');

//Buscar todas as conta
router.get("/relationship", authenticateJWT, async ( request, response ) => { await relationshipController.findAllRelationShip( request, response ) })
//Criar uma conta
router.post("/relationship", authenticateJWT, async (request, response) => { await relationshipController.createRelationShip( request, response ) })
//Deletar uma conta pelo id
router.delete("/relationship", authenticateJWT, async (request, response) => { await relationshipController.deleteRelationShipId( request, response ) })

module.exports = router
