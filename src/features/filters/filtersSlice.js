
export function filterReducer(state, action){
    switch(action.type){

        case "filter/filterToggled":
            return {
                ...state,
                [action.payload]: !state[action.payload]
            }

        default:
            return state
    }
}

