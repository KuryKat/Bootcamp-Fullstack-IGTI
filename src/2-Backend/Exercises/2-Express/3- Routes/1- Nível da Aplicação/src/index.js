import express from 'express'

const app = express()
app.use(express.json())

// QUALQUER CALLBACK, ROTA, ROUTER, DECLARADO NO
// ARQUIVO PRINCIPAL DA APLICAÇÃO É CONSIDERADO MIDDLEWARE NO NÍVEL DA APLICAÇÃO
app.get('/', (_, res) => res.send('Yahallo!'))

app.listen(3000, console.log('Started!'))
