import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { amenitiesAvailabel, countriesAvailable, roomTypeAvailable } from "./availableOptions";
import { amenitiesToggled, countryToggled, roomTypeToggled } from "./filtersSlice";

import { sto } from "../../store";

const countrySelector = state => state.filters.country
const amenitiesSelector = (state) => state.filters.amenities;
const roomTypeSelector = state => state.filters.roomtype;


export default function Filters() {
  const stateCountries = useSelector(countrySelector);
  const stateAmenities = useSelector(amenitiesSelector);
  const stateRoomtype = useSelector(roomTypeSelector);
  // console.log(stateAmenities);

  const dispatch = useDispatch();

  console.log(sto.getState());

  const [filter, setFilter] = React.useState({
    country: {
      Brazil: false,
      England: false,
      Germany: false,
    },
    amenities: {
      TV: false,
      Wifi: false,
      airConditioning: false,
      Pool: false,
      Kitchen: false,
      Elevator: false,
      Washer: false,
    },
    roomType: {
      privateRoom: false,
      entireRoom: false,
    },
  });


  function handleRoomTypeCheckboxChange(e) {
    const name = e.target.name;
    // dispatch(checkboxDispatcher("filter/roomTypeToggled", name));
  }


  const countryRenderer = countriesAvailable.map((item, index)=>{
    const checkedValue = stateCountries.includes(item);
      return(
        <div key={index} className="countryChecboxes">
          <label htmlFor={item}>
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

  const roomTypeRenderer = roomTypeAvailable.map((item, index)=>{
    const checkedValue = stateRoomtype.includes(item);
    return(
      <div key={index} className="roomType--checkbox">
        <label htmlFor={item}>
          <input 
            type="checkbox" 
            name={item}
            checked={checkedValue}
            onChange={(e)=>{
              const roomtypeName = e.target.name;
              const isChecked = e.target.checked;
              const toggleType = isChecked? "selected": "removed";
              dispatch(roomTypeToggled({roomtypeName, toggleType}))
            }}
          />
          {item}
        </label>
      </div>
    )
  })


  return (
    <div className="hotel--listing--app">
      <section className="filters">
        <div className="country--filter" style={{ border: "1px solid black" }}>
          {countryRenderer}
        </div>
        <br />
        <div
          className="amenities--filter"
          style={{ border: "1px solid black" }}
        >
          {amenitiesRenderer}
        </div>
        <br />
        <div className="roomType--filter" style={{ border: "1px solid black" }}>
          {roomTypeRenderer}
        </div>
      </section>
      <section className="listing"></section>
    </div>
  );
}
