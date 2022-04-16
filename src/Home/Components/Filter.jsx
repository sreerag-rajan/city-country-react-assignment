
import { useDispatch, useSelector } from "react-redux"
import { getCountriesData } from "../../Redux/country/country.action";
import { filterCities } from "../../Redux/city/city.action";
import { useEffect } from "react";


export const Filter = ()=>{
    const countries = useSelector((store)=>store.countries.countries);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const {value} = e.target;
        dispatch(filterCities(value));                
    }
    useEffect(()=>{
        dispatch(getCountriesData());
    },[])
    return (
        <div>
            <span>Filter:</span>
            <select onChange={handleChange}>
                <option value="all">---</option>
            {countries.map((el)=>{
                return <option key={el.id} value={el.country}>{el.country}</option>                    
                
            })}
            </select>

        </div>
    )
}