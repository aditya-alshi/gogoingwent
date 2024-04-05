import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchListingThunk = createAsyncThunk('hotel/listing', async()=>{
    return new Promise(resolve=>{
     
            setTimeout(async ()=>{
                const url = "https://ggwent.onrender.com/airbnbHotelsListings";
                const response = await fetch(url);
                const responseJSONParsed = await response.json();
                resolve(responseJSONParsed) 
    
            }, 4000)
        
    })
})



const initialState = {
    status : 'loading',
    entities: [
        {
            "_id": 10030955,
            "name": "Apt Linda Vista Lagoa - Rio",
            "room_type": "Private room",
            "minimum_nights": "1",
            "number_of_reviews": 0,
            "amenities": [
                "TV",
                "Cable TV",
                "Internet",
                "Wifi",
                "Air conditioning",
                "Pool",
                "Kitchen",
                "Free parking on premises",
                "Doorman",
                "Gym",
                "Elevator",
                "Buzzer/wireless intercom",
                "Family/kid friendly",
                "Washer",
                "Essentials",
                "24-hour check-in"
            ],
            "price": {
                "$numberDecimal": "701.00"
            },
            "images": {
                "picture_url": "https://a0.muscache.com/im/pictures/59c516bd-c7c3-4dae-8625-aff5f55ece53.jpg?aki_policy=large"
            },
            "address": {
                "street": "Rio de Janeiro, Rio de Janeiro, Brazil",
                "suburb": "Lagoa",
                "government_area": "Lagoa",
                "market": "Rio De Janeiro",
                "country": "Brazil",
                "country_code": "BR",
                "location": {
                    "type": "Point",
                    "coordinates": [
                        -43.205047082633435,
                        -22.971950988341874
                    ],
                    "is_location_exact": true
                }
            }
        },
        {
            "_id": 10059872,
            "name": "Soho Cozy, Spacious and Convenient",
            "room_type": "Entire home/apt",
            "minimum_nights": "4",
            "number_of_reviews": 3,
            "amenities": [
                "Air conditioning",
                "Kitchen",
                "Smoking allowed",
                "Doorman",
                "Elevator",
                "Heating",
                "Family/kid friendly",
                "Essentials",
                "24-hour check-in",
                "translation missing: en.hosting_amenity_50"
            ],
            "price": {
                "$numberDecimal": "699.00"
            },
            "images": {
                "picture_url": "https://a0.muscache.com/im/pictures/4533a1dc-6fd8-4167-938d-391c6eebbc19.jpg?aki_policy=large"
            },
            "address": {
                "street": "Hong Kong, Hong Kong Island, Hong Kong",
                "suburb": "Central & Western District",
                "government_area": "Central & Western",
                "market": "Hong Kong",
                "country": "Hong Kong",
                "country_code": "HK",
                "location": {
                    "type": "Point",
                    "coordinates": [
                        114.15027,
                        22.28158
                    ],
                    "is_location_exact": true
                }
            }
        }
    
    ]
} 


const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers:{},
    extraReducers: builder =>{
        builder
        .addCase(fetchListingThunk.pending, (state, action)=>{
            state.status = "loading"
        })
        .addCase(fetchListingThunk.fulfilled, (state, action)=>{
            // console.log(action.payload);
            state.entities = action.payload;
            state.status = 'idle'
        })
    }
})

export default listingSlice.reducer;


// export async function fetchHotes(dispatch, getState){
//     const url = "http://localhost:8000/airbnbHotelsListings";
//     const response = await fetch(url);
//     const responseJSONParsed = await response.json();
//     dispatch({type: "listing/listingLoaded", payload: responseJSONParsed})
// }
// export function listingReducer(state, action){
//     switch(action.type){
//         case "filter/amenitiesToggled":
//             // return filterTheList(action.payload, state.listing)
        
//         case "listing/listingLoaded":
//             return action.payload

//         default:
//             return state.listing
//     }
// }