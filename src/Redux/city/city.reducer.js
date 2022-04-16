import { GET_CITIES } from "./city.action";


const initstate = {cities:[]};


export const citiesReducer = (store = initstate, {type,payload})=>{
    switch(type){
        case GET_CITIES:
            return {...store, cities:[...payload]}
        default:
            return store;
    }

}