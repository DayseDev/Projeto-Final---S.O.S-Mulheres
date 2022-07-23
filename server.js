const app = require("./src/app") //chamando o arquivo app

const PORT = process.env.PORT

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`SERVIDOR RODANDO, OK! ${PORT}`)
})
