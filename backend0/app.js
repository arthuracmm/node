const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

// Servir arquivos estáticos a partir do diretório 'frontend0'
app.use(express.static(path.join(__dirname, 'frontend0')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend0', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

