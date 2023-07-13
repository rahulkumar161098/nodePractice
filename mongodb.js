
const { MongoClient, Long } = require('mongodb');
const url= 'mongodb://localhost:27017';
const client= new MongoClient(url)

async function dbConnection(){
    let result= await client.connect();
    let db= result.db('testdb');
    return db.collection('test')

}
module.exports=dbConnection