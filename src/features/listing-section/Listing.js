import React from "react";
import { useSelector} from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import ListingLoader from "./ListingLoader";
// import ReactPaginate from "react-paginate";

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
          : true) &&
        selectedAmenities.every((sami) => item.amenities.includes(sami))
    );
    return filteredEntities;
  }
);

const status = (state) => state.listing.status;

export default function Listing() {
  // const [listing, setListings] = React.useState([]);

  const listing = useSelector(finalFilterinResulListing);
  const theStatus = useSelector(status);

  // React.useEffect(() => {
  //   dispatch(fetchHotes);
  // }, []);

  const listingRenderer = listing.map((hotel) => {
    const onImageError = (e) => {
      e.target.src = "/assets/images/house-309113_1280.png";
    };

    return (
      <div key={parseInt(hotel._id)} className="hotel--card">
        <div className="hotel--image--wrapper">
          <img
            className="hotel--image"
            src={hotel.images.picture_url}
            onError={onImageError}
            alt="hotel"
          />
        </div>
        <div className="hotel--details">
          <p className="hotel--name">{hotel.name}</p>
          <p className="hotel--street">{hotel.address.street}</p>
          <div className="hotel--market">Market : {hotel.address.market}</div>
          <p>{hotel.room_type}</p>

          <div className="amenities--wrapper">
            {hotel.amenities.map((item, index) => {
              if (index < 5) {
                return (
                  <span key={index} className="amenities">
                    {item}
                  </span>
                );
              }
            })}
          </div>
        </div>
        <div className="hotel--pricing">
          <div className="hotel--reviews">
            {hotel.number_of_reviews} Review
            {hotel.number_of_reviews === 1 ? "" : "s"}
          </div>
          <div className="hotel--minimum--nights">
            minimum nights: {hotel.minimum_nights}
          </div>
          <div className="hotel--price">
            USD {parseInt(hotel.price.$numberDecimal)}
          </div>
          <div className="hotel--taxCharges">10% taxes and charges</div>
        </div>
      </div>
    );
  });

  return (
    <div className="listing--wrapper">
      <div className="number--of--results">
        {listingRenderer.length} Result{listingRenderer.length === 1 ? "" : "s"}
      </div>

      {theStatus === "loading" ? <ListingLoader /> : listingRenderer}
      {/* {listingRenderer} */}
    </div>
  );
}
