const { MongoClient, ServerApiVersion } = require('mongodb')
const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectId;
require('dotenv').config();

const USERNAME = process.env.MONGO_DB_USERNAME;
const PASSWORD = process.env.MONGO_DB_PASSWORD;
const CONNECTION = process.env.MONGO_DB_CONNECTION;

const uri = `mongodb+srv://${USERNAME}:${encodeURIComponent(PASSWORD)}${CONNECTION}`

const client = new MongoClient(uri);

 async function findWithId(query, option){
    try{
       await client.connect();
       const database =  client.db('sample_airbnb');
       const collection =  database.collection('listingsAndReviews');
       const cursor =  collection.find(query,option).limit(100);
       let result = []
       for await (let items of cursor){
        if(items._id){
            items._id = parseInt(items._id)
            result.push(items);
        }
       }

       return result;
    }finally{
        await client.close();
    }
}

module.exports.findWithId = findWithId;