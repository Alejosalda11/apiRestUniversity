const router = require('express').Router()
const userController = require('../controllers/userController');
const marcasController = require('../controllers/marcasControllers');
const tipoEquipoController = require('../controllers/tipoEquipoController');
const estadoEquiposController = require('../controllers/estadoEquiposController');

// User
router.get('/user', userController.fetch)
router.post('/user', userController.create)
router.put('/user', userController.update)
router.delete('/user/:_id', userController.delete)
router.get('/user/:_id', userController.getOne)

//Marcas
router.get('/marca', marcasController.fetch)
router.post('/marca', marcasController.create)
router.put('/marca', marcasController.update)
router.delete('/marca/:_id', marcasController.delete)
router.get('/marca/:_id', marcasController.getOne)

//Tipos de Equipos
router.get('/tipo', tipoEquipoController.fetch)
router.post('/tipo', tipoEquipoController.create)
router.put('/tipo', tipoEquipoController.update)
router.delete('/tipo/:_id', tipoEquipoController.delete)
router.get('/tipo/:_id', tipoEquipoController.getOne)

//Estados de Equipo
router.get('/estado', estadoEquiposController.fetch)
router.post('/estado', estadoEquiposController.create)
router.put('/estado', estadoEquiposController.update)
router.delete('/estado/:_id', estadoEquiposController.delete)
router.get('/estado/:_id', estadoEquiposController.getOne)


module.exports = router