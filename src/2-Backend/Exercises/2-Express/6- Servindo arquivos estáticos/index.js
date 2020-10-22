import express from 'express'

const app = express()
app.use(express.json())

// Direcionando o diretório do qual ele vai pegar os arquivos
app.use(express.static('./images'))

// Criando um "diretório" virtual
app.use('/images', express.static('./images'))

app.listen(3000, console.log('YAY'))
