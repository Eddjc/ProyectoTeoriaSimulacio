const { response, request } = require('express');
const Orden = require('../models/orden');

// OBTENER ORDENES
const getOrdenes = async (req = request, res = response) => {

    const ordenes = await Orden.findAll();

    if (ordenes.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(ordenes);


}

//CREAR ORDEN
const createOrden = async (req = request, res = response) => {

    const newOrden = await Orden.create(req.body);
    res.send(newOrden);

}

//OBTENER UNA ORDEN
const getOrden = async (req = request, res = response) => {

    const user = await Orden.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!user) {
        return res.send({ mensaje: `Orden no existe` });
    }

    res.send(user);

}

// ACTUALIZAR ORDEN
const updateOrden = async (req = request, res = response) => {

    const orden = await User.findByPk(req.params.id);

    if (!orden) {
        return res.send({ mensaje: `Orden no existe` });
    }

    await orden.update({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        fecha: req.body.fecha
    });

    res.send(orden);

}

//ELIMINAR ORDEN
const deleteOrden = async (req = request, res = response) => {

    const orden = await Orden.findByPk(req.params.id);

    if (!Orden ) {
        return res.send({ mensaje: `Orden no existe` });
    }

    await Orden.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({ codigoResultado:1 ,mensaje: `Orden eliminado con exito` });

}

module.exports = {
    getOrdenes,
    getOrden,
    createOrden,
    updateOrden,
    deleteOrden
}