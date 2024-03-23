import { useDispatch, useSelector } from "react-redux";

const countrySelect = (state) => state.country;
const amenitiesSelect = (state) => state.amenities
const checkboxDispatcher = (type, payload) => ({
  type,
  payload
});
export default function App() {
  const dispatch = useDispatch();

  const {Brazil, England, Germany} = useSelector(countrySelect);
  const { TV, Wifi, airConditioning, Pool, Kitchen, Elevator, Washer} = useSelector(amenitiesSelect)


  function handleCountryCheckboxChange(e) {
    const name = e.target.name;
    dispatch(checkboxDispatcher("filter/countryToggled", name));
}

function handleAmenitiesCheckboxChange(e){
    const name = e.target.name;
    dispatch(checkboxDispatcher("filter/amenitiesToggled", name));
  }

  return (
    <div className="hotel--listing--app">
      <section className="filters">
        <div className="country--filter" style={{border:"1px solid black"}}>
          <input
            type="checkbox"
            checked={ Brazil? true : false}
            onChange={handleCountryCheckboxChange}
            id="Brazil"
            name="Brazil"
          />
          <label htmlFor="Brazil">Brazil</label><br />
          <input
            type="checkbox"
            checked={ England? true : false}
            onChange={handleCountryCheckboxChange}
            id="England"
            name="England"
          />
          <label htmlFor="England">England</label>
        </div>
        <br />
        <div className="amenities--filter" style={{border:"1px solid black"}}>
          <input
            type="checkbox"
            checked={ TV? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="TV"
            name="TV"
          />
          <label htmlFor="TV">TV</label><br />
          <input
            type="checkbox"
            checked={ Wifi? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Wifi"
            name="Wifi"
          />
          <label htmlFor="Wifi">Wifi</label><br />
          <input
            type="checkbox"
            checked={ airConditioning? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="airConditioning"
            name="airConditioning"
          />
          <label htmlFor="airConditioning">airConditioning</label><br />
          <input
            type="checkbox"
            checked={ Pool? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Pool"
            name="Pool"
          />
          <label htmlFor="Pool">Pool</label><br />
          <input
            type="checkbox"
            checked={ Kitchen? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Kitchen"
            name="Kitchen"
          />
          <label htmlFor="Kitchen">Kitchen</label><br />
          <input
            type="checkbox"
            checked={ Elevator? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Elevator"
            name="Elevator"
          />
          <label htmlFor="Elevator">Elevator</label><br />
          <input
            type="checkbox"
            checked={ Washer? true : false}
            onChange={handleAmenitiesCheckboxChange}
            id="Washer"
            name="Washer"
          />
          <label htmlFor="Washer">Washer</label><br />
        </div>
      </section>
      <section className="listing"></section>
    </div>
  );
}
