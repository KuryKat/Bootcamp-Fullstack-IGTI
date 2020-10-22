import { EventEmitter } from 'events'

const eventEmitter = new EventEmitter()

eventEmitter.on('testeyayaya', obj => {
    console.log(obj)
})

export default eventEmitter
