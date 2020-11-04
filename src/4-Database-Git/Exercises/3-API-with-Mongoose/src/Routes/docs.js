import { Router } from 'express'

export const docs = Router().use((_, res) => {
    res.send({
        message: 'Welcome! Use This Routes:',
        routes: {
            '/create': {
                httpMethod: 'POST',
                description: 'Creates a New Student',
                params: {
                    require: true,
                    body: true,
                    type: 'JSON',
                    values: {
                        name: { type: 'string' },
                        value: {
                            type: 'number',
                            default: 0,
                        },
                        pass: {
                            type: 'boolean',
                            default: false,
                        },
                    },
                },
            },
            '/retrieve/all': {
                httpMethod: 'GET',
                description: 'Search for all Students',
                params: { require: false },
            },
            '/retrieve/:id': {
                httpMethod: 'GET',
                description: 'Search for an Student by ID',
                params: {
                    require: true,
                    routeParams: true,
                    values: {
                        id: { type: 'number' },
                    },
                },
            },
            '/update/:id': {
                httpMethod: 'PATCH',
                description: 'Update an Student by ID',
                params: {
                    require: true,
                    routeParams: true,
                    values: {
                        id: { type: 'number' },
                    },
                },
            },
            '/delete/:id': {
                httpMethod: 'DELETE',
                description: 'Delete an Student by ID',
                params: {
                    require: true,
                    routeParams: true,
                    values: {
                        id: { type: 'number' },
                    },
                },
            },
        },
    })
})
