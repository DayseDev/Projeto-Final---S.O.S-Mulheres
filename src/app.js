// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") //importando o express

const app = express() // executo o express


const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));


// exportando para usar o server.js
module.exports = app