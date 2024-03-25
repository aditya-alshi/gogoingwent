import { filterReducer } from "./features/filters/filtersSlice";

export default function rootReducer(state, action){
    return {
        ...state,
        filter: filterReducer(state.filter, action),
        
    }
}