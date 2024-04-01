import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import ListingLoader from "./ListingLoader";

const listingSelector = (state) => state.listing.entities;

const amenitiesIncludes = createSelector(
  state => state.listing.entities, //all the entities from the listingState. Check listingSlice for initialState
  state => state.filters.amenities, //this is the array from filter reducer. Check filterSlice for initialState

  //outputSelector
  (entities, selectedAmenities)=>{

    if(selectedAmenities.length === 0){
      return entities
    }

    //using .every method on selectedAmenities array. The .every method basically arranges a test for every element in the array it is called upon. 
    // all the elements should pass that test. if any one element fails, it returns false immediatly. otherwise it returns true. 
    //So filtering the entities array based on the the .every method returned value. if .every method returns true the entity will be includes. Or not otherwise
    const filteredEntities = entities.filter((item)=>
      selectedAmenities.every((sami)=>item.amenities.includes(sami))
    )
    return filteredEntities
    
  }
)

const theLisitngs = createSelector(
  (state) => state.listing,
  (listing) => listing.entities
  // state => state.filters.country,
  // state => state.filters.amenities,
  // state => state.filters.roomtype,
  // (entities,country, amenities, roomtype)=>{
  //     if(country.length && amenities.length && roomtype.length === 0){
  //         return entities
  //     }
  // }
);

const status = (state) => state.listing.status;

export default function Listing() {
  // const [listing, setListings] = React.useState([]);
  const dispatch = useDispatch();

  const listing = useSelector(amenitiesIncludes);
  const theStatus = useSelector(status);

  // React.useEffect(() => {
  //   dispatch(fetchHotes);
  // }, []);

  const listingRenderer = listing.map((hotel) => (
    <div key={parseInt(hotel._id)} className="hotel--card">
      <p className="hotel--name">{hotel.name}</p>
      <div className="amenities--wrapper">
        {hotel.amenities.map((item, index) =>
          item === "Tv" ||
          item === "Internet" ||
          item === "Air conditioning" ||
          item === "Elevator" ||
          item === "Wifi" ? (
            <span key={index} className="amenities">
              {item}
            </span>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  ));
  return (
    <div className="listing--wrapper">
      {theStatus === "loading" ? <ListingLoader /> : listingRenderer}
      {/* {listingRenderer} */}
    </div>
  );
}
