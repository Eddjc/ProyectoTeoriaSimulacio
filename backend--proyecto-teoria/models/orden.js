var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');

class Orden extends Model { }

Orden.init({
    nombre: DataTypes.STRING,
    estaturaMadre: DataTypes.INTEGER,
    estaturaPadre: DataTypes.INTEGER,
    genero: DataTypes.STRING,
    comentario: DataTypes.STRING,
    
},
    {
        sequelize,
        modelName: 'orden',
        timestamps: false
    }
);


module.exports = Orden;