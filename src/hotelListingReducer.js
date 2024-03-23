import { filterReducer } from "./features/filtersSlice"

export default function hotelListingReducer(state, action){


    // listing:
        // -> favorite: true/false

    return {
        ...state,
        country: filterReducer(state.country, action),
        amenities: filterReducer(state.amenities, action)
    }
}