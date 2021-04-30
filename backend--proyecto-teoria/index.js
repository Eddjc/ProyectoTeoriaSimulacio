const express = require('express');
const sequelize = require('./database/conexion');
const app = express();
const cors = require('cors');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
require('./database/asociations');
app.use(cors());

// Rutas
app.use('/administrador', require('./routes/administrador'));
app.use('/orden', require('./routes/orden'));

app.listen(3000, () => {

    sequelize.sync(force =true).then(con => console.log('Conectado'));

    console.log(`Server on port http://localhost:3000/`)
});