require('dotenv-safe').config()
const express = require("express") //importando o express
const oficinasRoutes = require("./routes/oficinasRoutes")

const app = express() // executo o express
const mongoose = require('./database/mongooseConnect')

app.use(express.json()) // uso o bodyparser

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// criar uma rota raiz
app.use("/oficinas", oficinasRoutes)
mongoose.connect()

// exportando para usar o server.js
module.exports = app