// src/Routes/auth.routes.js
const express = require('express');
const Auth = require('../Controller/auth.controller')
const auth = new Auth();
const router = express.Router();

router.post('/auth', async (request, response) => { auth.login( request, response ) });

module.exports = router;
