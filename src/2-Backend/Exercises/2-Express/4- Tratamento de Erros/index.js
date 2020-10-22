import express from 'express'

const app = express()
app.use(express.json())

// Geração de Erros Normais
// assim que estoura um erro
// ele executa o escopo da função
// 'use()' que contenha o parâmetro "err"
app.get('/', (req, res) => {
    throw new Error('Ocorreu um erro, essa não! :o')
})

// Geração de Erros Async (Necessário o uso explícito da função "next()")
app.post('/', async (req, res, next) => {
    try {
        throw new Error('Ocorreu um erro Async, essa não! :o')
    } catch (error) {
        next(error)
    }
})

/**
 *
 * TRATAMENTO DE ERROS
 *
 */
app.use((err, req, res, next) => {
    console.log(err.message)
    next(err)
})

app.use((err, req, res, next) => {
    res.status(500).send('Ocorreu um erro! :c')
})

app.listen(3000, console.log('YAY'))
