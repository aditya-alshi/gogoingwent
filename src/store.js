import { createStore} from "redux";
import rootReducer from "./rootReducer";

const preloadedState = {
    filter:{
        Brazil: false,
        England: false,
        Germany: false,
        TV: false,
        Wifi: false,
        airConditioning: false,
        Pool: false,
        Kitchen: false,
        Elevator: false,
        Washer: false,
        privateRoom: false,
        entireRoom: false,
    },
    listing:[
        {
            id: 10030955,
            name: "Apt Linda Vista Lagoa - Rio",
            amenities: [
                "Cable TV",
                "Internet",
                "Wifi",
                "Air conditioning",
                "Pool",
                "Kitchen",
                "Free parking on premises",
                "Doorman",
                "Gym",
                "Elevator",
                "Buzzer/wireless intercom",
                "Family/kid friendly",
                "Washer",
                "Essentials",
                "24-hour check-in"
            ],
        },
        {
            id: 10059872,
            name: "Soho Cozy, Spacious and Convenient",
            amenities: [
                "TV",
                "Cable TV",
                "Wifi",
                "Air conditioning",
                "Pool",
                "Kitchen",
                "Free parking on premises",
                "Doorman",
                "Gym",
                "Elevator",
                "Buzzer/wireless intercom",
                "Family/kid friendly",
                "Washer",
                "Essentials",
                "24-hour check-in"
            ],
        },
        {
            id: 10006546,
            name: "Ribeira Charming Duplex",
            amenities: [
                "TV",
                "Cable TV",
                "Internet",
                "Air conditioning",
                "Pool",
                "Kitchen",
                "Free parking on premises",
                "Doorman",
                "Gym",
                "Elevator",
                "Buzzer/wireless intercom",
                "Family/kid friendly",
                "Washer",
                "Essentials",
                "24-hour check-in"
            ],
        },
    ]
}


const store = createStore(rootReducer, preloadedState);
export default store;