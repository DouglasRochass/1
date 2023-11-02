const express = require('express');
const usuarioRoutes = require('./routes/rota');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
app.use(usuarioRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));