import { Route, Routes } from "react-router-dom"
import { AddCities } from "../AddCities/AddCities"
import { AddCountries } from "../AddCountries/AddCountries"
import { Home } from "../Home/Home"


export const AllRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add-country" element={<AddCountries/>}/>
            <Route path="/add-city" element={<AddCities/>}/>
        </Routes>
    )
}