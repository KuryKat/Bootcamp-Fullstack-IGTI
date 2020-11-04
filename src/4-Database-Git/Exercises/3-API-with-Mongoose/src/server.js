import express, { json } from 'express'
import { studentRouter } from './Routes/StudentRoute.js'
import { connectionURI } from './database/database.js'
import mongoose from 'mongoose'
;(async () => {
    await mongoose.connect(
        connectionURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        err =>
            err ? console.log(err.message) : console.log('Connected to MongoDB')
    )
})()
const PORT = 8080
const app = express()
app.use(json())
app.use('/students', studentRouter)
app.listen(PORT, console.log('API Started on Port: ' + PORT))
