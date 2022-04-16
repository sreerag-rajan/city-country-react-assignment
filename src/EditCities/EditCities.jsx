import { useState , useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCountriesData } from "../Redux/country/country.action";
import { getCitiesData } from "../Redux/city/city.action";
import styled from "styled-components"



export const EditCities = ({city, toggleEditStatus})=>{
    const EditDiv = styled.div`
        position: absolute;
        top: 100px;
        left: 40%;
        width: 30%;
        background-color: aqua;
        height: 400px;
        padding: 20px;

        & label{
            display: block;
            padding: 20px;
        }
    `

    const [formData, setFormData] = useState({
        city: city.city,
        country: city.country,
        population: city.population
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

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.patch(`http://localhost:8080/cities/${city.id}`,formData).then(({data})=>{
            console.log(data);
            setFormData({
                city:"",
                population:"",
                country:""
            })
            
            dispatch(getCitiesData());
            toggleEditStatus()
            
        })

    }
    
    return(
        <EditDiv>
            <h2>Edit {city.city}</h2>
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
            <button onClick={()=>{toggleEditStatus()}}>Close</button>

        </EditDiv>
    )
}