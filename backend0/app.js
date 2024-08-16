import express from 'express';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Obtenha o diretório do arquivo atual
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const port = 3001;
const app = express();

const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: 'test'
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json('o server ta pegando em malandro');
});

app.post('/produtos', (req, res)=>{
    const q = 'INSERT INTO produtos (`nome`, `descricao`,`valor`) VALUES(?)'
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.valor
    ]

    db.query(q,[values], (err, data)=>{
        if(err) return res.json(err);
        return res.json('o livro foi criado com sucesso');
    })
})

app.get('/produtos', (req, res) => {
    const q = 'SELECT * FROM produtos'
    db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
})
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

