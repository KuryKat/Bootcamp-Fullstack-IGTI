import express from 'express'
import { logger } from './utils/logger.js'
import { fileLogger } from './utils/fileLogger.js'
import accountsRouter from './routes/accounts.js'
import { promises } from 'fs';
import swaggerUI from 'swagger-ui-express'
import { swaggerDocument } from './docs/docs.js'

const { writeFile, readFile } = promises

const app = express()
app.use(express.json())
app.use('/account', accountsRouter)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(3000, async() => {
    try {
        await readFile('./data/accounts.json')
        logger.log("info", "Data File Readed!")
        fileLogger.log("info", "Data File Readed!")
    } catch (err) {
        logger.log("error", "No Data File Found!")
        fileLogger.log("error", "No Data File Found!")
        const initialJSON = {
            nextID: 1,
            accounts: []
        }
        logger.log("warn", "Creating new Data File...")
        fileLogger.log("warn", "Creating new Data File...")
        await writeFile('./data/accounts.json', JSON.stringify(initialJSON, null, 4))
        logger.log("info", "Data File Created!")
        fileLogger.log("info", "Data File Created!")
    }
    logger.log("info", "API Started!")
    fileLogger.log("info", "API Started!")
})