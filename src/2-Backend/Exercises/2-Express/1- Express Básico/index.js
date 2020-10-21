import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (_, res) => res.send('Helllo World!'))

app.listen(3000, () => console.log('Started!'))