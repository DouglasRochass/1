const Sequelize = require('sequelize');


const sequelize = new Sequelize('cadastro_aluno', 'Douglas', 'batata5.', {
    host: 'museus.mysql.database.azure.com',
    dialect: 'mysql',
    "ssl": true,
    "dialectOptions": {
       "ssl": {
          "require": true
       }
     }
  });

module.exports = sequelize
