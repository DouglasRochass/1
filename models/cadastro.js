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
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true // Evita a pluralização automática do nome da tabela
  });
  
  // Sincronize o modelo com o banco de dados
//   Usuario.sync();

  module.exports = Aluno