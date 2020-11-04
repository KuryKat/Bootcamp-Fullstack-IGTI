import mongoose from 'mongoose'
import { connectionURI } from './database.js'
;(async () => {
    //Localhost = 'mongodb://localhost/grades'
    await mongoose.connect(connectionURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connected!')
})()

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    value: {
        type: Number,
        require: true,
        default: 0,
    },
    pass: {
        type: Boolean,
        require: true,
        default: false,
    },
    lastModified: {
        type: Date,
        require: true,
        default: new Date(),
    },
})

mongoose.model('student', studentSchema, 'student')
const Student = mongoose.model('student')

;(async () => {
    await new Student({
        name: 'Kuruminhaaaa GOSTOSA',
        value: 100,
    }).save()
    console.log('new document inserted')
})()
