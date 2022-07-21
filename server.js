const app = require("./src/app") //chamando o arquivo app

const PORT = 3131 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`SERVIDOR RODANDO, OK! ${PORT}`)
})
