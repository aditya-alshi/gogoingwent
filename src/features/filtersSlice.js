

export function filterReducer(state, action){
    switch(action.type){
        case "filter/countryToggled":
            return {
                 ...state,
                 [action.payload]: !state[action.payload]
            }
            
        case "filter/amenitiesToggled":
            return {
                    ...state,
                    [action.payload]: !state[action.payload]
            }
        default:
            return state
    }
}

