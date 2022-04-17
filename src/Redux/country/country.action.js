import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = (payload)=>({type:GET_COUNTRIES, payload});



export const getCountriesData = ()=>{
    return (dispatch)=>{
        axios.get(`https://city-country-backend.herokuapp.com/countries`).then(({data})=>{
            dispatch(getCountries(data))
        })
    }
}