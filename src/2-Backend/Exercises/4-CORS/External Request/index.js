import express from 'express'
const app = express()
app.use(express.json())
app.use(express.static('./public'))
app.listen(8080, console.log('API Started!'))
