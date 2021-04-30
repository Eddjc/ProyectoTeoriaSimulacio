
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('teoria', 'root', 'vader29', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;