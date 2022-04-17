import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import axios from "axios";
import { getCitiesData } from "../Redux/city/city.action";
import { getCountriesData } from "../Redux/country/country.action";


export const AddCities = ()=>{
    const [formData, setFormData] = useState({
        city:"",
        population:"",
        country:""
    })
    const countries = useSelector((store)=>store.countries.countries);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountriesData());
    },[])

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }
//https://city-country-backend.herokuapp.com/countries
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(`https://city-country-backend.herokuapp.com/cities`,formData).then(({data})=>{
            console.log(data);
            setFormData({
                city:"",
                population:"",
                country:""
            })
            dispatch(getCitiesData());
        })

    }
    return(
        <div>
            <h1>Add Cities</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="city">City Name:
                    <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
                </label>
                <label htmlFor="population">Population:
                    <input type="number" name="population" id="population" value={formData.population} onChange={handleChange} />
                </label>
                <label htmlFor="country">Country:
                    <select name="country" onChange={handleChange}>
                    <option value={""}>---</option>
                        {countries.map((el)=>{
                            return <option key={el.id} value={el.country}>{el.country}</option>
                        })}
                    </select>
                </label>
                <input type="submit" value={"Add City"} />
            </form>
        </div>
    )
}