import axios from "axios";

export const GET_CITIES = "GET_CITIES";

export const getCities = (payload)=>({type:GET_CITIES, payload})


export const getCitiesData = ()=>(dispatch)=>{
    axios.get(`${process.env.SERVER_UR}/cities`).then(({data})=>{
        dispatch(getCities(data))
    })
}