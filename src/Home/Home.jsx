import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteCities, getCitiesData } from "../Redux/city/city.action";
import { Filter } from "./Components/Filter";
import { Sort } from "./Components/Sort";
import styled from "styled-components"
import { EditCities } from "../EditCities/EditCities";


export const Home = ()=>{
    const Delete = styled.button`
        border: none;
        background-color: red;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: 700;

        @media(max-width:500px){
            padding: 2px;
            font-weight: 300;            
        }
    `
    const Edit = styled.button`
        border: none;
        background-color: yellow;
        color: #070707;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: 700;

        @media(max-width:500px){
            padding: 2px;
            font-weight: 300;            
        }
    `
    const Actions = styled.div`
        display: flex;
        justify-content: flex-end;
        padding: 10px 30px;
        margin-right: 40px;
        gap: 20px;
    `

    const cities = useSelector((store)=>store.cities.cities);
    const dispatch = useDispatch()
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [editStatus, setEditStatus] = useState(false)
    const [editCity, setEditCity] = useState({})

    useEffect(()=>{
        dispatch(getCitiesData());
    },[])

    const handleDelete = (id)=>{
        setDeleteStatus(true);
        dispatch(deleteCities(id))
        setDeleteStatus(false);
    }

    const handleEdit = (city)=>{
        setEditStatus(true);
        setEditCity(city)
    }

    const toggleEditStatus = ()=>{
        setEditStatus(!editStatus)
    }
    return(
        <div>
            <h1>Cities and Countries</h1>
            <Actions>
            <Filter/>
            <Sort/>
            </Actions>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map((el, i)=>{
                        return <tr key={el.id}>
                            <td>{i+1}</td>
                            <td>{el.country}</td>
                            <td>{el.city}</td>
                            <td>{el.population}</td>
                            <td> <Edit onClick={()=>{
                                handleEdit(el);
                            }}>Edit</Edit> </td>
                            <td> {deleteStatus?"Deleting":<Delete onClick={()=>{
                                handleDelete(el.id)
                            }}>Delete</Delete>} </td>
                        </tr>
                    })}
                </tbody>
            </table>
            {editStatus&&<EditCities city={editCity} toggleEditStatus={toggleEditStatus}/>}
        </div>
    )
}