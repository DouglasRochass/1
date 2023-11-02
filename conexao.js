const Sequelize = require('sequelize');


const sequelize = new Sequelize('cadastro_aluno', 'root', 'Douglas5', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize