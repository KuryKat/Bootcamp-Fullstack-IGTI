import express, { json } from 'express'
import { logger } from './utils/Log/loggerIndex.js'
// import { fillDatabase } from './utils/fillDatabase.js'

import { connectionURI } from './database/database.js'
import mongoose from 'mongoose'
;(async () => {
    await mongoose.connect(
        connectionURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        err =>
            err
                ? logger('error', err.message)
                : logger('info', 'Connected to MongoDB')
    )
})()
// Limpando a database (APENAS PARA FINS DE APRENDIZADO)
// mongoose.connection.dropCollection('accounts', err => {
//     if (err) logger('error', err.message)
//     else logger('info', 'Cleaned Database')
// })

// Passando dados para a database:
// ;(async () => {
//     try {
//         await fillDatabase('./src/data/accounts.json')
//     } catch (error) {
//         logger('error', error.message)
//     }
// })()

const PORT = 8080
const app = express()
app.use(json())
app.listen(PORT, logger('info', 'API Started on Port: ' + PORT))
