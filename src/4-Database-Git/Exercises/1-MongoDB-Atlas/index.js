const MongoClient = require('mongodb').MongoClient

const uri = require('./database.json').connectionURI

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

client.connect(async err => {
    if (err) console.log(err)
    // const collection = client.db('grades').collection('student')
    // const documents = await collection.find().toArray()
    // console.log(documents)

    const databaseList = await client.db().admin().listDatabases()
    console.log('Databases:')
    databaseList.databases.forEach(db => console.log(` - ${db.name}`))

    client.close()
})
