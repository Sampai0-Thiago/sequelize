const enderecoRoutes = require('./routes/enderecoRoutes.js');
const usuarioRoutes = require('./routes/usuarioRoutes.js');
const alunoRoutes = require('./routes/alunoRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./docs/swagger');
const express = require('express');
const port = process.env.PORT;
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/api-docs/swagger.json', (req, res) => {
  res.json(swaggerDoc);
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (req, res) => {
  res.send({ status: 'ok' })
});

app.use('/usuarios', usuarioRoutes);
app.use('/enderecos', enderecoRoutes);
app.use('/alunos', alunoRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`API servida em: http://localhost:${port}`)
});