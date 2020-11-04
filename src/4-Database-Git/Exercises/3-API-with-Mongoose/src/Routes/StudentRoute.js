import { Router } from 'express'
import { docs } from './docs.js'
import { Student } from '../Models/Student.js'
import { generateID } from '../utils/generateID.js'

export const studentRouter = Router()
    .get('/', docs)
    .post('/create', async (req, res, next) => {
        try {
            const id = await generateID()
            const student = new Student({
                _id: id,
                ...req.body,
            })
            await student.save()
            res.send(student)
        } catch (err) {
            next(err)
        }
    })

    .get('/retrieve/all', async (_, res, next) => {
        try {
            const result = await Student.find({})
            res.send({ results: result })
        } catch (err) {
            next(err)
        }
    })
    .get('/retrieve/:id', async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await Student.find({ _id: id }).limit(1)
            res.send({ result: result })
        } catch (err) {
            next(err)
        }
    })

    .patch('/update/:id', async (req, res, next) => {
        const { id } = req.params
        try {
            const result = await Student.findByIdAndUpdate(
                id,
                { lastModified: new Date(), ...req.body },
                {
                    new: true,
                }
            )
            if (result == null) throw new Error('Invalid ID')
            res.send({ newObject: result })
        } catch (err) {
            next(err)
        }
    })

    .delete('/delete/:id', async (req, res, next) => {
        const { id } = req.params
        try {
            const result = await Student.findByIdAndDelete(id)
            if (!result) throw new Error('Invalid ID!')
            res.send({ ok: true })
        } catch (err) {
            next(err)
        }
    })

    .use((err, req, res, next) => {
        res.status(400).send({ error: err.message })
        console.error(err.message)
    })
