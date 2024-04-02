import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import ListingLoader from "./ListingLoader";

const listingSelector = (state) => state.listing.entities;
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

const countriesIncludes = createSelector(
  // inputSelector 1
  (state) => state.listing.entities,

  // inpurSelector 2
  (state) => state.filters.country,

  // outputSelector
  (entities, selectedCountries) => {
    if (selectedCountries.length === 0) {
      return entities;
    }
    const filteredCountries = entities.filter((item) =>
      selectedCountries.includes(item.address.country)
    );
    return filteredCountries;
  }
);

const amenitiesIncludes = createSelector(
  // inputSelector 1
  (state) => state.listing.entities, //all the entities from the listingState. Check listingSlice for initialState

  //inputSelector 2
  (state) => state.filters.amenities, //this is the array from filter reducer. Check filterSlice for initialState

  //outputSelector
  (entities, selectedAmenities) => {
    if (selectedAmenities.length === 0) {
      return entities;
    }

    //using .every method on selectedAmenities array. The .every method basically arranges a test for every element in the array it is called upon.
    // all the elements should pass that test. if any one element fails, it returns false immediatly. otherwise it returns true.
    //So filtering the entities array based on the the .every method returned value. if .every method returns true the entity will be includes. Or not otherwise
    const filteredEntities = entities.filter((item) =>
      selectedAmenities.every((sami) => item.amenities.includes(sami))
    );
    return filteredEntities;
  }
);

// const rooTypeIncludes = createSelector(
//   // inputSelector 1
//   state=>state.listing.entities,

//   //inputSelector 2
//   state=>state.filters.roomtype,

//   // outputSelector
//   (entities, roomtype)=>{
//     if(roomtype.length === 0){
//       return entities
//     }
//     const filteredEntitesByRoomType = entities.filter((item)=>
//       roomtype.every(type=>)
//     )
//   }
// )

const finalFilterinResulListing = createSelector(
  (state) => state.listing.entities,
  (state) => state.filters.country,
  (state) => state.filters.amenities,

  (entities, selectedCountries, selectedAmenities) => {
  
    // step 1: select each hotel from the main array
    // step 2: for each hotel check for those filter arrays
    // step 3: the current iterating hotel should include atleast one from country and atleast one from amenities filter. 
              // the key word here is 'and'
    // step 4: if any one of the filter array is empty, just return true. Because that's what the main filter method will see. 
    const filteredEntities = entities.filter(
      (item) =>
        (selectedCountries.length > 0
          ? selectedCountries.includes(item.address.country) 
          : true) 
          
          &&

        (selectedAmenities.every((sami) => item.amenities.includes(sami)))
    );
    return filteredEntities;
  }
);

const status = (state) => state.listing.status;

export default function Listing() {
  // const [listing, setListings] = React.useState([]);
  const dispatch = useDispatch();

  const listing = useSelector(finalFilterinResulListing);
  const theStatus = useSelector(status);

  // React.useEffect(() => {
  //   dispatch(fetchHotes);
  // }, []);

  const listingRenderer = listing.map((hotel) => (
    <div key={parseInt(hotel._id)} className="hotel--card">
      <p className="hotel--name">{hotel.name}</p>
      <p>Country : {hotel.address.country} </p>
      <div className="amenities--wrapper">
        {hotel.amenities.map((item, index) => (
          <span key={index} className="amenities">
            {item}
          </span>
        ))}
      </div>
    </div>
  ));
  return (
    <div className="listing--wrapper">
      {listingRenderer.length}
      {theStatus === "loading" ? <ListingLoader /> : listingRenderer}
      {/* {listingRenderer} */}
    </div>
  );
}
