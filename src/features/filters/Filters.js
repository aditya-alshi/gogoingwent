import { useDispatch, useSelector } from "react-redux";

const filterSelect = (state) => state.filter;

const checkboxDispatcher = (type, payload) => ({
  type,
  payload,
});

export default function Filters(){
    const dispatch = useDispatch();


  const { 
    Brazil, England,

    TV, 
    Wifi, 
    airConditioning, 
    Pool, 
    Kitchen, 
    Elevator, 
    Washer,
    
    privateRoom,
    entireRoom
  } = useSelector(filterSelect);
 

  function handleCheckboxChange(e) {
    const name = e.target.name;
    dispatch(checkboxDispatcher("filter/filterToggled", name));
  }

  return (
    <div className="hotel--listing--app">
      <section className="filters">
        <div className="country--filter" style={{ border: "1px solid black" }}>
          <input
            type="checkbox"
            checked={Brazil ? true : false}
            onChange={handleCheckboxChange}
            id="Brazil"
            name="Brazil"
          />
          <label htmlFor="Brazil">Brazil</label>
          <br />
          <input
            type="checkbox"
            checked={England ? true : false}
            onChange={handleCheckboxChange}
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
            checked={TV ? true : false}
            onChange={handleCheckboxChange}
            id="TV"
            name="TV"
          />
          <label htmlFor="TV">TV</label>
          <br />
          <input
            type="checkbox"
            checked={Wifi ? true : false}
            onChange={handleCheckboxChange}
            id="Wifi"
            name="Wifi"
          />
          <label htmlFor="Wifi">Wifi</label>
          <br />
          <input
            type="checkbox"
            checked={airConditioning ? true : false}
            onChange={handleCheckboxChange}
            id="airConditioning"
            name="airConditioning"
          />
          <label htmlFor="airConditioning">airConditioning</label>
          <br />
          <input
            type="checkbox"
            checked={Pool ? true : false}
            onChange={handleCheckboxChange}
            id="Pool"
            name="Pool"
          />
          <label htmlFor="Pool">Pool</label>
          <br />
          <input
            type="checkbox"
            checked={Kitchen ? true : false}
            onChange={handleCheckboxChange}
            id="Kitchen"
            name="Kitchen"
          />
          <label htmlFor="Kitchen">Kitchen</label>
          <br />
          <input
            type="checkbox"
            checked={Elevator ? true : false}
            onChange={handleCheckboxChange}
            id="Elevator"
            name="Elevator"
          />
          <label htmlFor="Elevator">Elevator</label>
          <br />
          <input
            type="checkbox"
            checked={Washer ? true : false}
            onChange={handleCheckboxChange}
            id="Washer"
            name="Washer"
          />
          <label htmlFor="Washer">Washer</label>
          <br />
        </div>
        <br />
        <div className="country--filter" style={{ border: "1px solid black" }}>
          <input
            type="checkbox"
            checked={privateRoom ? true : false}
            onChange={handleCheckboxChange}
            id="Private Room"
            name="privateRoom"
          />
          <label htmlFor="Private Room">Private Room</label>
          <br />
          <input
            type="checkbox"
            checked={entireRoom ? true : false}
            onChange={handleCheckboxChange}
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