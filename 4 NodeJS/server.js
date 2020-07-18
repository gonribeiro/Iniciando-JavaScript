const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// BD
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true}
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

// Porta de acesso a aplicação
app.listen(3001);