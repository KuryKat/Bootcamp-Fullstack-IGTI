import express from 'express'

const app = express()
app.use(express.json());

// MIDDLEWARES DO NÍVEL DO ROTEADOR 
// Para fazer um código mais organizado, bem mais legível
// e deixar a index apenas inicializando as funções você pode criar Roteadores,
// Roteadores são arquivos secundários (geralmente salvos dentro de uma pasta "routes")
// que contam com um Router do Express exportado e importado na Index, e na Index se define
// em qual URI que este roteador será redirecionado, exemplo abaixo.

import router from './routes/Simplerouter.js'

app.use('/router', router)

app.listen(3000, console.log("Started!"))