import React from "react";
import { useSelector } from "react-redux";

const listingSelector = state => state.listing

export default function Listing(){
    // const [listing, setListings] = React.useState([]);

    const  listing= useSelector(listingSelector)

    // React.useEffect(()=>{
    //     const fetchHotelListing = async ()=>{
    //         const url = "http://localhost:8000/airbnbHotelsListings";
    //         const response = await fetch(url);
    //         const responseJSONParsed = await response.json();
    //         setListings(responseJSONParsed)
    //         console.log(responseJSONParsed);
    //     }
    //     fetchHotelListing();
    // }, [])

    const listingRenderer = listing.map(hotel=>(
        <div key={parseInt(hotel.id)} className="hotel--card">
            <p className="hotel--name">{hotel.name}</p>
            <div className="amenities--wrapper">
                {hotel.amenities.map((item,index)=>(
                    
                            (item==="Tv"||item==="Internet"||item==="Air conditioning"||item==="Elevator" || item === "Wifi")?<span key={index} className="amenities">{item}</span>:""
                    
                    ))}
            </div>
        </div>
    ))
    return(
        <div className="listing--wrapper">
            {listingRenderer}
        </div>
    )
}