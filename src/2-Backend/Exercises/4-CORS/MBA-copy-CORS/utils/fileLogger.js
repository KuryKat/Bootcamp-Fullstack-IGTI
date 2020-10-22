import winston from 'winston'
const { combine, printf, label, timestamp } = winston.format
const { File } = winston.transports

/**
 * Make The String to LOG information
 * @param {{level: String, message: String, label: String, timestamp: String}} args
 */
const format = printf(({ level, message, label, timestamp }) => {
    return `[${label}] ["${level}" - ${timestamp}] ${message}`
})

const fileLogger = winston.createLogger({
    level: 'info',
    transports: [new File({ filename: 'logs.log' })],
    format: combine(
        label({ label: 'my-bank-api' }),
        timestamp({ format: 'HH:mm:ss' }),
        format
    ),
})

export { fileLogger }
