const swaggerDocument = {
    swagger: '2.0',
    info: {
        description: 'This is a sample Bank API',
        version: '1.0.0',
        title: 'My-Bank-API',
        license: {
            name: 'MIT License © 2020 KuryKat',
            url: 'http://localhost:3000/license.html',
        },
    },
    host: 'localhost:3000',
    basePath: '/',
    tags: [
        {
            name: 'account',
            description: 'Account Management',
        },
    ],
    paths: {
        '/account/create': {
            post: {
                tags: ['account'],
                summary: 'Create a new account',
                description: 'Create a New Account with Name and Balance',
                consumes: ['application/json'],
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        description: 'Account Object',
                        required: true,
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    example: 'KuryKat',
                                },
                                balance: {
                                    type: 'integer',
                                    example: 6983.93,
                                },
                            },
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'Account Created!',
                        schema: {
                            $ref: '#/definitions/Account',
                        },
                    },
                    400: {
                        description: 'Error occurred',
                    },
                },
            },
        },
        '/account/search/all': {
            get: {
                tags: ['account'],
                summary: 'Search for all Accounts existing',
                description: '',
                consumes: ['application/json'],
                responses: {
                    200: {
                        description: 'Operation Successfull Completed',
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Account',
                            },
                        },
                    },
                    400: {
                        description: 'Error occurred',
                    },
                },
            },
        },
        '/account/search/{accountId}': {
            get: {
                tags: ['account'],
                summary: 'Find Account by ID',
                description: 'Returns a single Account',
                consumes: ['application/json'],
                parameters: [
                    {
                        name: 'accountId',
                        in: 'path',
                        description: 'ID of Account',
                        required: true,
                        type: 'integer',
                    },
                ],
                responses: {
                    200: {
                        description: 'Operation Successfull Completed',
                        schema: {
                            $ref: '#/definitions/Account',
                        },
                    },
                    400: {
                        description: 'Error occurred',
                    },
                },
            },
        },
        '/account/delete/{accountId}': {
            delete: {
                tags: ['account'],
                summary: 'Delete Account by ID',
                description: 'Delete a single Account',
                consumes: ['application/json'],
                produces: ['application/json'],
                parameters: [
                    {
                        name: 'accountId',
                        in: 'path',
                        description: 'ID of Account',
                        required: true,
                        type: 'integer',
                    },
                ],
                responses: {
                    200: {
                        description: 'Account Deleted!',
                    },
                    400: {
                        description: 'Error occurred',
                    },
                },
            },
        },
        '/account/edit/{accountId}': {
            put: {
                tags: ['account'],
                summary: 'Edit Account by ID',
                description: 'Edit a single Account',
                consumes: ['application/json'],
                produces: ['application/json'],
                parameters: [
                    {
                        name: 'accountId',
                        in: 'path',
                        description: 'ID of Account',
                        required: true,
                        type: 'integer',
                    },
                    {
                        in: 'body',
                        name: 'body',
                        description: 'Account Object',
                        required: true,
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    example: 'Kury Katy',
                                },
                                balance: {
                                    type: 'integer',
                                    example: 3943.93,
                                },
                            },
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'Account Edited!',
                        schema: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'integer',
                                    example: 1,
                                },
                                name: {
                                    type: 'string',
                                    example: 'Kury Katy',
                                },
                                balance: {
                                    type: 'integer',
                                    example: 3943.93,
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Error occurred',
                    },
                },
            },
        },
        '/account/updateBalance/{accountId}': {
            patch: {
                tags: ['account'],
                summary: 'Update the Account Balance by ID',
                description: 'Update a Single Account Balance By ID',
                consumes: ['application/json'],
                produces: ['application/json'],
                parameters: [
                    {
                        name: 'accountId',
                        in: 'path',
                        description: 'ID of Account',
                        required: true,
                        type: 'integer',
                    },
                    {
                        in: 'body',
                        name: 'body',
                        description: 'Account Object',
                        required: true,
                        schema: {
                            type: 'object',
                            properties: {
                                balance: {
                                    type: 'integer',
                                    example: 3943.97,
                                },
                            },
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'Balance Updated!',
                        schema: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'integer',
                                    example: 1,
                                },
                                name: {
                                    type: 'string',
                                    example: 'KuryKat',
                                },
                                balance: {
                                    type: 'integer',
                                    example: 3943.97,
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Error occurred',
                    },
                },
            },
        },
    },
    definitions: {
        Account: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    example: 1,
                },
                name: {
                    type: 'string',
                    example: 'KuryKat',
                },
                balance: {
                    type: 'integer',
                    example: 6983.93,
                },
            },
        },
    },
}

export { swaggerDocument }
