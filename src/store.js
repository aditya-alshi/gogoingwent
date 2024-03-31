import { createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import { thunk }  from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer  from "./features/filters/filtersSlice";
import listingReducer from "./features/listing-section/listingSlice";



const preloadedState = {
    listing:[]
}

const thunKEnhancer = applyMiddleware(thunk)


export const sto = configureStore({
    reducer:{
        filters: filterReducer,
        listing: listingReducer
    }
})

const store = createStore(rootReducer, preloadedState, thunKEnhancer);
export default store;