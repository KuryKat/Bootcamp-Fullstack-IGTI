import winston from 'winston'
import { colour } from './colour.js'

const { combine, printf, label, timestamp } = winston.format
const { Console } = winston.transports

// args = { level, message, label, timestamp }

/**
 * Make The String to LOG information (with colors, yay)
 * @param {{level: String, message: String, label: String, timestamp: String}} args
 */
const stringMaker = args => {
    const defaultString = label => colour('cyan', `[${label}]`)
    const message = () => colour('BOLD', `${args.message}`)
    const levelColor = (level, timestamp) => {
        if (level === 'error') {
            return colour('red', `["${level.toUpperCase()}" - ${timestamp}]`)
        } else if (level === 'warn') {
            return colour('yellow', `["${level.toUpperCase()}" - ${timestamp}]`)
        } else if (level === 'info') {
            return colour(
                'lightgreen',
                `["${level.toUpperCase()}" - ${timestamp}]`
            )
        }
    }
    return `${defaultString(args.label)} ${levelColor(
        args.level,
        args.timestamp
    )} ${message(args.message)}`
}
const format = printf(args => {
    return stringMaker(args)
})

const logger = winston.createLogger({
    level: 'info',
    transports: [new Console()],
    format: combine(
        label({ label: 'my-bank-api' }),
        timestamp({ format: 'HH:mm:ss' }),
        format
    ),
})

export { logger }
