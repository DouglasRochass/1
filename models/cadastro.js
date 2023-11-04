const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../conexao')

const Aluno = sequelize.define('Aluno', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    //Para não criar a coluna createdAt e updateAt do sequelize e 
    //também para não pluralizar a tabela 
    timestamps: false,
    freezeTableName: true
  });
  
  // Sincronize o modelo com o banco de dados
//   Usuario.sync();

  module.exports = Aluno
