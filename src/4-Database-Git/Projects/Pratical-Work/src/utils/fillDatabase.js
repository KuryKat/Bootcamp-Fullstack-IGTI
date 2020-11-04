import { readFile } from 'fs/promises'
import { Account } from '../Models/Account.js'
import { logger } from './Log/loggerIndex.js'

export const fillDatabase = async filePath => {
    const data = JSON.parse(await readFile(filePath))
    data.map(({ agencia, conta, name, balance }) => {
        new Account({
            agencia,
            conta,
            name,
            balance,
        }).save()
    })
    logger('info', 'Filled Database with ' + data.length + ' documents')
}
