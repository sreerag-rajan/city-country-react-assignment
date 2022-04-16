import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../Redux/city/city.action";


export const Sort = ()=>{
    const cities = useSelector((store)=>store.cities.cities);
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        const {value} = e.target
        console.log(value)
        let x;
        if(value==="popasc"){
            x = cities.sort((a,b)=>a.population-b.population)
            console.log(x)   
        }
        else{
            x = cities.sort((a,b)=>b.population-a.population)  
            console.log(x)
        }
        dispatch(getCities(x));
   
    }

    return(
        <div>
            <select onChange={handleChange}>
                <option value="">Select Sort</option>
                <option value="popasc">Population Ascending</option>                
                <option value="popdesc">Population Descending</option>
            </select>
        </div>
    )
}