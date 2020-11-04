import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const Student = model(
    'student',
    Schema({
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
        _id: {
            type: Number,
            require: true,
        },
    })
)
