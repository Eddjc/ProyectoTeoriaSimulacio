const express = require('express');
const { getOrden, createOrden, getOrdenes, updateOrden, deleteOrden } = require('../controller/ordenes.controller');
const router = express.Router();

router.get('/', getOrdenes);

router.get('/:id', getOrden);

router.post('/', createOrden);

router.put('/:id', updateOrden);

router.delete('/:id', deleteOrden);

module.exports = router;
