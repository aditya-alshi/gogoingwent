import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotes } from "./listingSlice";
import { createSelector } from "@reduxjs/toolkit";

const listingSelector = state => state.listing.entities


const theLisitngs = createSelector(
    state => state.listing,
    listing => listing.entities
    // state => state.filters.country,
    // state => state.filters.amenities,
    // state => state.filters.roomtype,
    // (entities,country, amenities, roomtype)=>{
    //     if(country.length && amenities.length && roomtype.length === 0){
    //         return entities
    //     }
    // }
)

export default function Listing(){
    // const [listing, setListings] = React.useState([]);
    const dispatch = useDispatch();

    const  listing= useSelector(theLisitngs)

    React.useEffect(()=>{
        dispatch(fetchHotes)
    }, [])

    const listingRenderer = listing.map(hotel=>(
        <div key={parseInt(hotel._id)} className="hotel--card">
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