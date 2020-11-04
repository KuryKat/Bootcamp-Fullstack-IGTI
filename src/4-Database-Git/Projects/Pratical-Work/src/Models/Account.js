import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const Account = model(
    'account',
    Schema({
        agencia: {
            type: Number,
            require: true,
        },
        conta: {
            type: Number,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        balance: {
            type: Number,
            require: true,
            default: 0,
            min: 0,
        },
    })
)
