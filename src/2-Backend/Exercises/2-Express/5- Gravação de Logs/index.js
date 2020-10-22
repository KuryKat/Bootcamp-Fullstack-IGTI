/**
 *
 * GRAVAÇÃO DE LOGS (ARQUIVO E CONSOLE)
 * USANDO LIB "WINSTON"
 *
 */

import winston from 'winston'

const { combine, printf, label, timestamp } = winston.format
const { Console, File } = winston.transports

const format = printf(({ level, message, label, timestamp }) => {
    return `[${timestamp} - ${label}] </${level.toUpperCase()}> - ${message}`
})

const logger = winston.createLogger({
    level: 'silly',
    transports: [new Console(), new File({ filename: 'cute-log.log' })],
    format: combine(label({ label: 'my-cute-app' }), timestamp(), format),
})

// Métodos de LOG
logger.error('Erro! >.<')
logger.warn('Aviso! >.>')
logger.info('Informação, YAY!')
logger.verbose('Detalhamento!')
logger.debug('Debug! 🤓')
logger.silly('Log Bobinho, tehehe')

// Log "padrão" (passa o tipo por parâmetro)
logger.log('warn', 'EI, ISSO É UM AVISO POR PARÂMETRO! :D')
logger.log('info', 'EI, ISSO É UMA INFO POR PARÂMETRO! :D')
