var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');

class Administrador extends Model { }

Administrador.init({ 
    nombre: DataTypes.STRING,
    apellido:DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    genero: DataTypes.STRING,
    correo: DataTypes.STRING,
    password: DataTypes.STRING

},
    {
        sequelize,
        modelName: 'Administrador',
        timestamp: false
    }
);

module.exports = Administrador;