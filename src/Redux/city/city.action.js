import axios from "axios";

export const GET_CITIES = "GET_CITIES";

export const getCities = (payload)=>({type:GET_CITIES, payload})


export const getCitiesData = ()=>(dispatch)=>{
    axios.get(`https://city-country-backend.herokuapp.com/cities`).then(({data})=>{
        dispatch(getCities(data))
    })
}

export const filterCities = (country)=>(dispatch)=>{
    axios.get(`https://city-country-backend.herokuapp.com/cities`).then(({data})=>{
        if(country==="all"){
            dispatch(getCities(data));
            return;
        }
        let filtered = data.filter((el)=>{
            if(el.country===country){
                return el;
            }
        })
        dispatch(getCities(filtered));
    })

}

export const deleteCities = (id)=>(dispatch)=>{
    axios.delete(`https://city-country-backend.herokuapp.com/cities/${id}`).then(()=>{
        dispatch(getCitiesData())
    })
}


