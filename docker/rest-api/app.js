const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

//get
app.get('/api/items', (req, res)=>{
    res.json({items: []});
});

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

