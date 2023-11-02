
const bcrypt = require('bcrypt');
const Aluno = require('../models/cadastro');

exports.createUsuario = async (req, res) => {
  const { nome, usuario, email, senha } = req.body;

  try {
    // Verifica se o usuário já existe
    const usuarioExistente = await Aluno.findOne({
      where: {
        usuario: usuario,
      },
    });

    // Verifica se o email já existe
    const emailExistente = await Aluno.findOne({
      where: {
        email: email,
      },
    });

    if (usuarioExistente) {
      return res.status(400).json({ error: 'Nome de usuário já está em uso.' });
    }

    if (emailExistente) {
      return res.status(400).json({ error: 'Endereço de email já está em uso.' });
    }

    // Hash da senha antes de salvar no banco de dados
    const hashedSenha = await bcrypt.hash(senha, 10);

    // Cria um novo usuário
    const novoUsuario = await Aluno.create({
      nome: nome,
      usuario: usuario,
      email: email,
      senha: hashedSenha,
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao criar usuário' });
  }
};
