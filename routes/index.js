const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index')

router.get('/', indexController.index);

router.get('/hola-mundo', indexController.holaMundo);

router.get('/productos', indexController.productos);

router.post('/nuevo-producto', indexController.nuevoProducto);

module.exports = router;
