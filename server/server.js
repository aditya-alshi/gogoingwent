const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const database = require('./database');

const findWithId = database.findWithId;

app.use(cors());

app.get('/airbnbHotelsListings', (req, res)=>{
    const query = {
         "images.picture_url" : {$exists: true}
        }

    const option = {
        projection: {
            _id:1,
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
const port = process.env.PORT || 8000;

app.use(express.static(path.join('public')));
app.use((req, res)=>{
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
})

app.listen(port, ()=>console.log("server listening at port 8000"));