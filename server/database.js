const { MongoClient, ServerApiVersion } = require('mongodb')
const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectId;

const uri = `mongodb+srv://combohollow:${encodeURIComponent("Qwerty@123")}@mducluster.klnmibe.mongodb.net/?retryWrites=true&w=majority&appName=mducluster`

const client = new MongoClient(uri);

 async function findWithId(query, option){
    try{
       await client.connect();
       const database = await client.db('sample_airbnb');
       const collection = await database.collection('listingsAndReviews');
       const cursor = await collection.find(query,option).limit(1);
       let result = []
       for await (items of cursor){
        result.push(items);
       }

       return result;
    }finally{
        await client.close();
    }
}

module.exports.findWithId = findWithId;