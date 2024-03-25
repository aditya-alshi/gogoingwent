const { MongoClient, ServerApiVersion } = require('mongodb')
const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectId;

const uri = `mongodb+srv://combohollow:${encodeURIComponent("Qwerty@123")}@mducluster.klnmibe.mongodb.net/?retryWrites=true&w=majority&appName=mducluster`

const client = new MongoClient(uri);

 async function findWithId(query, option){
    try{
       await client.connect();
       const database =  client.db('sample_airbnb');
       const collection =  database.collection('listingsAndReviews');
       const cursor =  collection.find(query,option).limit(10);
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