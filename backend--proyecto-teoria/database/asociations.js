const Administrador = require('../models/administrador');
const Orden =  require('../models/orden');


//ADMISTRADOR - ORDEN 
Administrador.hasMany(Orden)

Orden.belongsTo(Administrador)
