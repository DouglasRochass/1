const express = require('express');
const usuarioController = require('../controller/controller');

const router = express.Router();
router.post('/usuarios', usuarioController.createUsuario);

module.exports = router;
