import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../Redux/city/city.action";


export const Sort = ()=>{
    const cities = useSelector((store)=>store.cities.cities);
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        const {value} = e.target
        let x;
        if(value==="popasc"){
            x = cities.sort((a,b)=>a.population-b.population)            
        }
        else{
            x = cities.sort((a,b)=>b.population-a.population)  
        }
        dispatch(getCities(x));
   
    }

    return(
        <div>
            <select onChange={handleChange}>
                <option value="popasc">Population Ascending</option>                
                <option value="popdesc">Population Descending</option>
            </select>
        </div>
    )
}