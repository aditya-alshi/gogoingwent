const express = require('express');
const cors = require('cors');
const app = express();

const database = require('./database');

const findWithId = database.findWithId;

app.use(cors());

app.get('/airbnbHotelsListings', (req, res)=>{
    const query = {
         "images.picture_url" : {$exists: true}
        }

    const option = {
        projection: {
            _id:0,
            "images.picture_url": 1,
            amenities: 1,
            name:1,
            number_of_reviews:1,
            room_type:1,
            price:1,
            minimum_nights:1,
            address:1
        }
    }
    findWithId(query, option).then(result => res.json(result)).catch(err=>console.log(err.message));
})

app.listen(8000, ()=>console.log("server listening at port 8000"));