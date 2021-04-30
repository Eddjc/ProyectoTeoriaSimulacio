const express = require('express');
const { getAdministrador, createAdministrador, getAdministradores, updateAdministrador, deleteAdministrador } = require('../controller/administradores.controller');
const router = express.Router();

router.get('/', getAdministradores);

router.get('/:id', getAdministrador);

router.post('/', createAdministrador);

router.put('/:id', updateAdministrador);

router.delete('/:id', deleteAdministrador);

module.exports = router;
