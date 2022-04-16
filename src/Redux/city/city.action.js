import axios from "axios";

export const GET_CITIES = "GET_CITIES";

export const getCities = (payload)=>({type:GET_CITIES, payload})


export const getCitiesData = ()=>(dispatch)=>{
    axios.get(`http://localhost:8080/cities`).then(({data})=>{
        dispatch(getCities(data))
    })
}

export const filterCities = (country)=>(dispatch)=>{
    axios.get(`http://localhost:8080/cities`).then(({data})=>{
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
    axios.delete(`http://localhost:8080/cities/${id}`).then(()=>{
        dispatch(getCitiesData())
    })
}


