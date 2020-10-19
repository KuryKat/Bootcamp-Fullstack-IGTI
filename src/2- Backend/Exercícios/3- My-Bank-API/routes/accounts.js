import express from 'express'
import { promises } from 'fs'
import { logger } from '../utils/logger.js'
import { fileLogger } from '../utils/fileLogger.js'

const { writeFile, readFile } = promises
const router = express.Router()

router.post("/create", async(req, res, next) => {
    try {
        const { name, balance } = req.body
        if (!name || balance == null) throw new Error("Name e Balance são valores obrigatórios!")
        if (typeof balance !== "number") throw new Error("Balance precisa ser um número!")
        const data = JSON.parse(await readFile('./data/accounts.json'))

        const account = {
            id: data.nextID++,
            name: name,
            balance: balance
        }

        data.accounts.push(account)
        await writeFile('./data/accounts.json', JSON.stringify(data, null, 4))

        logger.log("info", `Done! Account Created!`)
        fileLogger.log("info", `Done! Account Created!`)

        res.send(account)
    } catch (err) {
        next(err)
    }
})

router.get("/search/all", async(_, res, next) => {
    try {
        const data = JSON.parse(await readFile('./data/accounts.json'))
        delete data.nextID
        res.send(data)
    } catch (err) {
        next(err)
    }
})

router.get("/search/:id", async(req, res, next) => {
    try {
        const data = JSON.parse(await readFile('./data/accounts.json'))
        delete data.nextID
        const { id } = req.params
        const account = data.accounts.find(account => account.id === parseInt(id))
        account ? res.send(account) : next(new Error("Invalid ID!"))
    } catch (err) {
        next(err)
    }
})

router.delete("/delete/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const data = JSON.parse(await readFile('./data/accounts.json'))

        const index = data.accounts.findIndex(account => account.id === parseInt(id))
        if (index === -1) throw new ReferenceError("Registro Não encontrado!")

        data.accounts = data.accounts.filter(account => account.id !== parseInt(id))
        await writeFile('./data/accounts.json', JSON.stringify(data, null, 4))

        logger.log("info", `Done! Account Deleted!`)
        fileLogger.log("info", `Done! Account Deleted!`)

        res.send({ message: "Successfully Deleted!" })
    } catch (err) {
        next(err)
    }
})

router.put("/edit/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const { name, balance } = req.body

        if (!name || balance == null) throw new Error("Name e Balance são valores obrigatórios!")
        if (typeof balance !== "number") throw new Error("Balance precisa ser um número!")

        const data = JSON.parse(await readFile('./data/accounts.json'))
        const index = data.accounts.findIndex(account => account.id === parseInt(id))

        if (index === -1) throw new ReferenceError("Registro Não encontrado!")

        data.accounts[index] = {
            id: parseInt(id),
            name: name,
            balance: balance
        }

        await writeFile('./data/accounts.json', JSON.stringify(data, null, 4))

        logger.log("info", `Done! Account Updated!`)
        fileLogger.log("info", `Done! Account Updated!`)

        res.send(data.accounts[index])
    } catch (err) {
        next(err)
    }
})

router.patch("/updateBalance/:id", async(req, res, next) => {
    try {
        const data = JSON.parse(await readFile('./data/accounts.json'))
        const { id } = req.params
        const { balance } = req.body

        if (balance == null) throw new Error("Balance é um valor obrigatório!")
        if (typeof balance !== "number") throw new Error("Balance precisa ser um número!")

        const index = data.accounts.findIndex(account => account.id === parseInt(id))

        if (index === -1) throw new ReferenceError("Registro Não encontrado!")

        delete data.accounts[index].balance

        data.accounts[index] = {
            id: parseInt(id),
            ...data.accounts[index],
            balance: balance
        }

        await writeFile('./data/accounts.json', JSON.stringify(data, null, 4))

        logger.log("info", `Done! Balance Updated!`)
        fileLogger.log("info", `Done! Balance Updated!`)

        res.send(data.accounts[index])
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, _) => {
    logger.log('error', `("${req.method} ${req.originalUrl}") ${err.message}`)
    fileLogger.log('error', `("${req.method} ${req.originalUrl}") ${err.message}`)

    res.status(400).send({ error: err.message })
})

export default router