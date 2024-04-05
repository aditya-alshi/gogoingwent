import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { amenitiesAvailabel, countriesAvailable } from "./availableOptions";
import { amenitiesToggled, countryToggled } from "./filtersSlice";

const countrySelector = state => state.filters.country
const amenitiesSelector = (state) => state.filters.amenities;
// const roomTypeSelector = state => state.filters.roomtype;


export default function Filters() {
  const stateCountries = useSelector(countrySelector);
  const stateAmenities = useSelector(amenitiesSelector);
  // const stateRoomtype = useSelector(roomTypeSelector);

  const dispatch = useDispatch();

  const countryRenderer = countriesAvailable.map((item, index)=>{
    const checkedValue = stateCountries.includes(item);
      return(
        <div key={index} className="countryChecboxes">
          <label >
            <input 
              type="checkbox"
              name={item}
              checked={checkedValue}
              onChange={(e)=>{
                const countryName = e.target.name;
                const isChecked = e.target.checked;
                const toggleType = isChecked? "selected":"removed"
                dispatch(countryToggled({countryName, toggleType}))
              }}
            />
            {item}
          </label>
        </div>
      )
  })

  const amenitiesRenderer = amenitiesAvailabel.map((item, index) => {
    const checkedValue = stateAmenities.includes(item);
    function handleAmenitiesCheckboxChange(e) {
      const amenitiesName = e.target.name;
      const isChecked = e.target.checked;
      const toggleType = isChecked ? "selected" : "removed";
      dispatch(amenitiesToggled({ amenitiesName, toggleType }));
    }
      return (
        <div key={index}>
          <label htmlFor={item}>
            <input
              type="checkbox"
              name={item}
              checked={checkedValue}
              onChange={handleAmenitiesCheckboxChange}
            />
            {item}
          </label>
        </div>
      );
  });

  // const roomTypeRenderer = roomTypeAvailable.map((item, index)=>{
  //   const checkedValue = stateRoomtype.includes(item);
  //   return(
  //     <div key={index} className="roomType--checkbox">
  //       <label htmlFor={item}>
  //         <input
  //           type="checkbox" 
  //           name={item}
  //           checked={checkedValue}
  //           onChange={(e)=>{
  //             const roomtypeName = e.target.name;
  //             const isChecked = e.target.checked;
  //             const toggleType = isChecked? "selected": "removed";
  //             dispatch(roomTypeToggled({roomtypeName, toggleType}))
  //           }}
  //         />
  //         {item}
  //       </label>
  //     </div>
  //   )
  // })


  return (
      <section className="filters">
        <div className="country--filter" >
          <p className="filter--title">Country</p>
          {countryRenderer}
        </div>
        <br />
        <div
          className="amenities--filter"
        >
          <p className="filter--title">Amenities</p>
          {amenitiesRenderer}
        </div>
        <br />
      </section>
  )
}
