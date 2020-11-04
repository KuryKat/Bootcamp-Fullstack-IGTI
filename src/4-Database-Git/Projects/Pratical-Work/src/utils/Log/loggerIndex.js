import { logger as consolee } from './logger.js'
import { fileLogger } from './fileLogger.js'

/**
 * Logs a message into Terminal & File
 * @param {String} type
 * @param {String} message
 */
export const logger = (type, message) => {
    consolee.log(type, message)
    fileLogger.log(type, message)
}
