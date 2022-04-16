import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = (payload)=>({type:GET_COUNTRIES, payload});



export const getCountriesData = ()=>{
    return (dispatch)=>{
        axios.get(`http://localhost:8080/countries`).then(({data})=>{
            dispatch(getCountries(data))
        })
    }
}