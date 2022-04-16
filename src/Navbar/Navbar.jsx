import { Link } from "react-router-dom"


export const Navbar = ()=>{
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/add-country"}>Add Countries</Link>
            <Link to={"/add-city"}>Add Cities</Link>
        </nav>
    )
}