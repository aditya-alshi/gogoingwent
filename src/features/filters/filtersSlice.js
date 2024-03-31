import { createSlice } from "@reduxjs/toolkit"

export function filterReducer(state, action){
    switch(action.type){
        case "filter/countryToggled":
            return {
                ...state,
                country : {
                    ...state,
                    [action.payload]: !state.country[action.payload]
                }
            }
        case "filter/amenitiesToggled":
            return {
                ...state,
                amenities: {
                        ...state.amenities,
                        [action.payload]: !state.amenities[action.payload]
                }
            }
        
        case "filter/roomTypeToggled":
            return {
                ...state,

                roomType: {
                    ...state.roomType,
                    [action.payload]: !state.roomType[action.payload]
                }
            }
        default:
            return state
    }
}

const initialState = {
    country: [],
    amenities: [],
    roomtype: []
}

const filterSlice = createSlice({
    name : 'filters',
    initialState,
    reducers: {
        countryToggled(state, action){
            const payload = action.payload;
            if(payload.toggleType === "selected"){
                state.country.push(payload.countryName)
            }
            else if(payload.toggleType === "removed"){
                state.country = state.country.filter(item => item !== payload.countryName)
            }
        },
        amenitiesToggled(state, action){
            const payload = action.payload;
            if(payload.toggleType === "selected"){
                state.amenities.push(payload.amenitiesName)
            }
            else if(payload.toggleType === "removed"){
                state.amenities = state.amenities.filter(item => item !== payload.amenitiesName)
            }
        },
        roomTypeToggled(state, action){
            const payload = action.payload;
            if(payload.toggleType === "selected"){
                state.roomtype.push(payload.roomtypeName)
            }
            else if(payload.toggleType === "removed"){
                state.roomtype = state.roomtype.filter(item => item !== payload.roomtypeName)
            }
        }
    }
})

export const { countryToggled, amenitiesToggled, roomTypeToggled } = filterSlice.actions
export default filterSlice.reducer