const { response, request } = require('express');
const Administrador = require('../models/administrador');

// OBTENER ADMINISTRADORES
const getAdministradores = async (req = request, res = response) => {

    const administradores = await Administrador.findAll();

    if (administradores.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(administradores);


}

//CREAR ADMINISTRADOR
const createAdministrador = async (req = request, res = response) => {

    const newAdministrador = await Administrador.create(req.body);
    res.send(newAdministrador);

}

//OBTENER UN ADMINISTRADOR
const getAdministrador = async (req = request, res = response) => {

    const user = await Administrador.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!user) {
        return res.send({ mensaje: `Administrador no existe` });
    }

    res.send(user);

}

// ACTUALIZAR ADMINISTRADOR
const updateAdministrador = async (req = request, res = response) => {

    const administrador = await User.findByPk(req.params.id);

    if (!administrador) {
        return res.send({ mensaje: `Administrador no existe` });
    }

    await administrador.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        genero: req.body.genero,
        correo: req.body.correo
    });

    res.send(administrador);

}

//ELIMINAR ADMINISTRADOR
const deleteAdministrador = async (req = request, res = response) => {

    const administrador = await Administrador.findByPk(req.params.id);

    if (!Administrador ) {
        return res.send({ mensaje: `Administrador no existe` });
    }

    await Administrador.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({ codigoResultado:1 ,mensaje: `Administrador eliminado con exito` });

}

module.exports = {
    getAdministradores,
    getAdministrador,
    createAdministrador,
    updateAdministrador,
    deleteAdministrador
}