import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getCountriesData } from "../Redux/country/country.action"

export const AddCountries = ()=>{
    const [country, setcountry] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        setcountry(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/countries`,{country}).then(({data})=>{
            console.log(data);
            setcountry("");
            dispatch(getCountriesData());
        })
    }
    return(
        <div>
            <h1>Add Countries</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="country">Country Name:
                    <input type="text" placeholder="Country" value={country} onChange={handleChange}/>
                    <input type="submit" value={"Add Country"} />
                </label>
            </form>
        </div>
    )
}