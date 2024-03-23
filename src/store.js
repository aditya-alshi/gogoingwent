import { createStore} from "redux";
import hotelListingReducer from "./hotelListingReducer";
import { countryReducer } from "./features/filtersSlice";

const preloadedState = {
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
    }
}

const store = createStore(hotelListingReducer, preloadedState);
export default store;