import { configureStore } from "@reduxjs/toolkit";
import filterReducer  from "./features/filters/filtersSlice";
import listingReducer from "./features/listing-section/listingSlice";



// const preloadedState = {
//     listing:[]
// }

// const thunKEnhancer = applyMiddleware(thunk)

// const store = createStore(rootReducer, preloadedState, thunKEnhancer);

export const sto = configureStore({
    reducer:{
        filters: filterReducer,
        listing: listingReducer
    }
})

export default sto;