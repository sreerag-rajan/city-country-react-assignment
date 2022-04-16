import { GET_COUNTRIES } from "./country.action";


const initState = {countries:[]};

export const countriesReducer = (store=initState,{type,payload})=>{
    switch(type){
        case GET_COUNTRIES:
            return {...store, countries:[...payload]}
        default:
            return store
    }

}