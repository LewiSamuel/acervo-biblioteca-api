// Importa e inicializa o servidor express
const express = require('express');
const app = express();


// Habilita a todas rotas receber requisições de todas as origens 
const cors = require('cors');
app.use(cors());

// Implementa toda comunicação recebida em JSON
app.use(express.json());

// importa e implementa o arquivo de rotas no servidor
const routes = require('./routes');
app.use(routes);

// set porta padrão de execução do servidor
// Caso nao esteja definida no .env, usa a 5000 por padrão
app.set('port', (process.env.PORT || 5000));

// Start server
app.listen(app.get('port'), function() {
    console.log("#################################")
    console.log("| ");
    console.log('|  ACERVO BIBLIOTECA - API at port ', app.get('port'));
    console.log("| ");
    console.log("#################################")
});