import React from "react";
import { useDispatch, useSelector } from "react-redux";

const checkboxDispatcher = (type, payload) => ({
  type,
  payload,
});

export default function Filters(){
    const dispatch = useDispatch();

  
  const [filter, setFilter] = React.useState({
    country: {
        Brazil: false,
        England: false,
        Germany: false
    },
    amenities:{
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
    }
})


  function handleCountryCheckboxChange(e) {
    const name = e.target.name;
    // dispatch(checkboxDispatcher("filter/countryToggled", name));
  }

  function handleAmenitiesCheckboxChange(e) {
    console.log(e.target.id);
    const name = e.target.name;
    setFilter(prev=>({
      ...prev,
      amenities: {
        ...prev.amenities,
        [name] : !prev.amenities[name]
      }
    }))
    // dispatch(checkboxDispatcher("filter/amenitiesToggled", filter.amenities));
  }
  
  function handleRoomTypeCheckboxChange(e) {
    const name = e.target.name;
    // dispatch(checkboxDispatcher("filter/roomTypeToggled", name));
  }

  return (
    <div className="hotel--listing--app">
      <section className="filters">
        <div className="country--filter" style={{ border: "1px solid black" }}>
          <input
            type="checkbox"
            checked={filter.country.Brazil ? true : false}
            onChange={handleCountryCheckboxChange}
            id="Brazil"
            name="Brazil"
          />
          <label htmlFor="Brazil">Brazil</label>
          <br />
          <input
            type="checkbox"
            checked={filter.country.England ? true : false}
            onChange={handleCountryCheckboxChange}
            id="England"
            name="England"
          />
          <label htmlFor="England">England</label>
        </div>
        <br />
        <div
          className="amenities--filter"
          style={{ border: "1px solid black" }}
        >
          <input
            type="checkbox"
            checked={filter.amenities.TV ? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="TV"
            name="TV"
          />
          <label htmlFor="TV">TV</label>
          <br />
          <input
            type="checkbox"
            checked={filter.amenities.Wifi ? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Wifi"
            name="Wifi"
          />
          <label htmlFor="Wifi">Wifi</label>
          <br />
          <input
            type="checkbox"
            checked={filter.amenities.airConditioning ? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Air Conditioning"
            name="airConditioning"
          />
          <label htmlFor="airConditioning">airConditioning</label>
          <br />
          <input
            type="checkbox"
            checked={filter.amenities.Pool ? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Pool"
            name="Pool"
          />
          <label htmlFor="Pool">Pool</label>
          <br />
          <input
            type="checkbox"
            checked={filter.amenities.Kitchen ? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Kitchen"
            name="Kitchen"
          />
          <label htmlFor="Kitchen">Kitchen</label>
          <br />
          <input
            type="checkbox"
            checked={filter.amenities.Elevator ? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Elevator"
            name="Elevator"
          />
          <label htmlFor="Elevator">Elevator</label>
          <br />
          <input
            type="checkbox"
            checked={filter.amenities.Washer ? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Washer"
            name="Washer"
          />
          <label htmlFor="Washer">Washer</label>
          <br />
        </div>
        <br />
        <div className="roomType--filter" style={{ border: "1px solid black" }}>
          <input
            type="checkbox"
            checked={filter.roomType.privateRoom ? true : false}
            onChange={handleRoomTypeCheckboxChange}
            id="Private Room"
            name="privateRoom"
          />
          <label htmlFor="Private Room">Private Room</label>
          <br />
          <input
            type="checkbox"
            checked={filter.roomType.entireRoom ? true : false}
            onChange={handleRoomTypeCheckboxChange}
            id="Entire Room"
            name="entireRoom"
          />
          <label htmlFor="Entire Room">Entire Room</label>
        </div>
      </section>
      <section className="listing"></section>
    </div>
  );
}