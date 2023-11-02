const express = require('express');
const usuarioController = require('../controller/controleler');

const router = express.Router();
router.post('/usuarios', usuarioController.createUsuario);

module.exports = router;