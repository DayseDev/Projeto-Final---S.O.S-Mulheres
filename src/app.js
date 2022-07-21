// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") //importando o express

//importe da continuacao das rotas de filmes
const Routes = require("./routes/oficinasRoutes")

const app = express() // executo o express

app.use(express.json()) // uso o bodyparser

// criar uma rota raiz
app.use("/oficinas", Routes)


// exportando para usar o server.js
module.exports = app